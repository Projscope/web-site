interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
