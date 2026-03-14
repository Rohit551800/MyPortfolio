import React, { useState } from 'react';
import data from '../../data/resume';  // ✅ fixed: pages/ → src/ → data/resume
import './Contact.css';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/xlgplpyd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const json = await res.json();
        setError(json?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: '✉', label: 'Email',    val: data.email,    href: `mailto:${data.email}` },
    { icon: '📱', label: 'Phone',    val: data.phone,    href: `tel:${data.phone}` },
    { icon: '📍', label: 'Location', val: data.location, href: null },
    { icon: '⌨', label: 'GitHub',   val: '@Rohit551800', href: data.github },
  ];

  return (
    <div className="contact-page page-enter">
      <div className="page-container">
        <div className="page-label">GET IN TOUCH</div>
        <h1 className="page-title">Let's <span>Connect</span></h1>

        <div className="contact-layout">
          {/* Left info */}
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently open to internship opportunities and collaborations.
              Whether you have a project in mind or just want to say hi — my inbox is always open.
            </p>

            <div className="contact-items">
              {contactItems.map(ci => (
                <div className="contact-item" key={ci.label}>
                  <span className="ci-icon">{ci.icon}</span>
                  <div>
                    <p className="ci-label">{ci.label}</p>
                    {ci.href
                      ? <a href={ci.href} className="ci-val link"
                           target={ci.href.startsWith('http') ? '_blank' : undefined}
                           rel="noreferrer">{ci.val}</a>
                      : <p className="ci-val">{ci.val}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <a href={data.github}   target="_blank" rel="noreferrer" className="social-btn">GitHub ↗</a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="social-btn">LinkedIn ↗</a>
              <a href="https://rsgshopzone.netlify.app/" target="_blank" rel="noreferrer" className="social-btn accent">ShopZone ↗</a>
            </div>
          </div>

          {/* Right form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="back-btn" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="Your name"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="you@example.com"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    placeholder="What's this about?"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows="6"
                    placeholder="Tell me more..."
                    required
                    disabled={loading}
                  />
                </div>

                {/* Error message */}
                {error && <p className="form-error">{error}</p>}

                <button
                  type="submit"
                  className={`form-submit ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}