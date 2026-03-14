import { useCounter } from '../../hooks/useCounter';

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(target);
  return (
    <div className="hero__stat">
      <span className="hero__stat-number" ref={ref}>{count}</span>
      <span className="hero__stat-suffix">{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const stats = [
    { target: 150, suffix: '+', label: 'Projects Delivered' },
    { target: 15, suffix: '+', label: 'Years Experience' },
    { target: 98, suffix: '%', label: 'Client Satisfaction' },
    { target: 40, suffix: '+', label: 'Enterprise Clients' },
  ];

  const handleClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Consulting &middot; Architecture &middot; Development</p>
        <h1 className="hero__title">
          Expert IT Consulting &amp;<br />
          <span className="hero__title--accent">Software Development.</span>
        </h1>
        <p className="hero__subtitle">
          From concept to production — expert software architecture, rapid prototyping,
          full-stack development, and AI-powered solutions that drive real business outcomes.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg" onClick={handleClick('#contact')}>Start Your Project</a>
          <a href="#services" className="btn btn--outline btn--lg" onClick={handleClick('#services')}>Explore Services</a>
        </div>
        <div className="hero__stats">
          {stats.map(s => (
            <StatCounter key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
