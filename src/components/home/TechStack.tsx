import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';

const techs = ['.NET / C#', 'React', 'TypeScript', 'Node.js', 'Python', 'Azure', 'AWS', 'Docker', 'PostgreSQL', 'SQL', 'Unity / C#', 'Others...'];

export default function TechStack() {
  const animRef = useScrollAnimation();

  return (
    <section className="tech-stack">
      <div className="container">
        <SectionHeader tag="Technology" title="Our Tech Stack" />
        <div className="tech-stack__grid" ref={animRef}>
          {techs.map(tech => (
            <div className="tech-item" data-animate key={tech}>
              <span className="tech-item__name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
