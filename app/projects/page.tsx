// Autorin: Ella K.
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Projekte</h1>
      <p className="muted">Eine Auswahl meiner Projekte. Details werden beim Anklicken angezeigt.</p>

      <section className="projectsGrid">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            subtitle={p.subtitle}
            tags={p.tags}
            href={`/projects/${p.slug}`}
          />
        ))}
      </section>
    </main>
  );
}