import { useState, FormEvent, useCallback } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    setStatus('sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setStatus('sent');
          form.reset();
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        }
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  }, []);

  const buttonText =
    status === 'sending' ? 'Sending...'
    : status === 'sent' ? 'Message Sent!'
    : status === 'error' ? 'Failed — Try Again'
    : 'Send Message';

  const buttonStyle =
    status === 'sent' ? { background: 'var(--color-success)', borderColor: 'var(--color-success)' }
    : status === 'error' ? { background: '#ef4444', borderColor: '#ef4444' }
    : undefined;

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Build Something<br />Great Together</h2>
            <p className="contact__desc">Ready to start your project? Send us a message and we'll get back to you within 24 hours to discuss your vision, requirements, and next steps.</p>
            <div className="contact__details">
              <div className="contact__detail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                <div>
                  <strong>Phone</strong>
                  <span>+1 204-797-1681</span>
                </div>
              </div>
              <div className="contact__detail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                <div>
                  <strong>Email</strong>
                  <span>support@projscope.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__form-wrap">
            <form
              className="contact__form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden" style={{ display: 'none' }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Smith" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Your Company" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="form-group form-group--full">
                <label htmlFor="message">Tell Us About Your Project</label>
                <textarea id="message" name="message" rows={5} placeholder="Describe your project, goals, and timeline..." required />
              </div>
              <button type="submit" className="btn btn--primary btn--lg btn--full" disabled={status === 'sending'} style={buttonStyle}>
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
