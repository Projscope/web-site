import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { services } from '../../data/services';

export default function Services() {
  const animRef = useScrollAnimation();

  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeader
          tag="What We Do"
          title="Services &amp; Expertise"
          description="End-to-end software services & consulting from strategic architecture to production deployment, powered by modern technologies and AI."
        />
        <div className="services__grid" ref={animRef}>
          {services.map((service, i) => (
            <div className="service-card" data-animate key={i}>
              <div className="service-card__icon" dangerouslySetInnerHTML={{ __html: service.icon }} />
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__tags">
                {service.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
