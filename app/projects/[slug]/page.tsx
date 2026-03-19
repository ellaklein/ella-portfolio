/// Autorin: Ella K.

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

type Params = { slug: string };

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="container">
      <Link className="button" href="/projects">
        ← Zur Übersicht
      </Link>

      <h1 className="pageTitle" style={{ marginTop: 16 }}>
        {project.title}
      </h1>
      <p className="muted">{project.subtitle}</p>

      <div className="card" style={{ marginTop: 18 }}>
        <h2 className="sectionTitle">Beschreibung</h2>
        <p>{project.description}</p>

        {project.highlights?.length ? (
          <>
            <h2 className="sectionTitle" style={{ marginTop: 18 }}>
              Highlights
            </h2>
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        ) : null}

        <div className="projectTags" style={{ marginTop: 16 }}>
          {project.tags.map((t) => (
            <span key={t} className="projectTag">{t}</span>
          ))}
        </div>

        {project.codeImage ? (
          <>
            <h2 className="sectionTitle" style={{ marginTop: 18 }}>
              Einblick
            </h2>

            <Image
              src={project.codeImage.src}
              alt={project.codeImage.alt}
              width={1200}
              height={700}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.08)",
                marginTop: 10,
              }}
            />

            {project.codeImage.description ? (
              <p className="muted" style={{ marginTop: 8 }}>
                {project.codeImage.description}
              </p>
            ) : null}
          </>
        ) : null}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}