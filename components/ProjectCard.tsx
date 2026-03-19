// Autorin: Ella K.
import Link from "next/link";

export default function ProjectCard({
  title,
  subtitle,
  tags,
  href,
}: {
  title: string;
  subtitle: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link className="projectCard" href={href}>
      <h3 className="projectTitle">{title}</h3>
      <p className="projectSubtitle">{subtitle}</p>

      <div className="projectTags">
        {tags.map((t) => (
          <span key={t} className="projectTag">{t}</span>
        ))}
      </div>

      <span className="projectLink">Details öffnen →</span>
    </Link>
  );
}