// Autorin: Ella K.


type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="modalBackdrop" onClick={onClose} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <h2>{project.title}</h2>
          <button className="modalClose" onClick={onClose} type="button">×</button>
        </div>

        <p className="muted">{project.subtitle}</p>
        <p style={{ marginTop: 12 }}>{project.description}</p>

        <div className="projectTags" style={{ marginTop: 14 }}>
          {project.tags.map(t => (
            <span key={t} className="projectTag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}