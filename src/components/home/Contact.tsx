import Cal from '@calcom/embed-react';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner contact__inner--cal">
          <div className="contact__info">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Build Something<br />Great Together</h2>
            <p className="contact__desc">Ready to start your project? Book a free consultation directly on our calendar. Pick a time that works for you and we'll discuss your vision, requirements, and next steps.</p>
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
          <div className="contact__cal-wrap">
            <Cal
              calLink="projscope"
              config={{
                layout: 'month_view',
                theme: 'auto',
              }}
              style={{
                width: '100%',
                height: '100%',
                overflow: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
