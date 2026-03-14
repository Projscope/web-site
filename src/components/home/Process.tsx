import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

const steps = [
  { number: '01', title: 'Discovery & Strategy', description: 'Deep-dive into your requirements, business goals, and technical landscape. We identify risks, define scope, and craft a strategic roadmap.' },
  { number: '02', title: 'Architecture & Design', description: 'System architecture, technology selection, and UX design. We create detailed blueprints and interactive prototypes before writing a line of code.' },
  { number: '03', title: 'Development & Testing', description: 'Agile sprints with continuous integration, automated testing, and regular demos. You see progress every week and can steer direction in real time.' },
  { number: '04', title: 'Deployment & Scale', description: 'Production deployment with monitoring, performance optimization, and ongoing support. We ensure your software is reliable, secure, and ready to scale.' },
];

export default function Process() {
  const animRef = useScrollAnimation();

  return (
    <section className="process" id="process">
      <div className="container">
        <SectionHeader
          tag="How We Work"
          title="Our Process"
          description="A proven methodology that transforms ideas into production-grade software, with transparency at every step."
        />
        <div className="process__timeline" ref={animRef}>
          {steps.map(step => (
            <div className="process__step" data-animate key={step.number}>
              <div className="process__step-number">{step.number}</div>
              <div className="process__step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
