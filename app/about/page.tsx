// Autorin: Ella K.

import Image from "next/image";
import SkillsList from "@/components/SkillsList";
import SocialLinks from "@/components/SocialLinks";

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHeroText">
          <p className="aboutEyebrow">Informatik & Design · Hochschule München</p>
          <h1>About me</h1>
          <p className="aboutLead">
            Ich kombiniere Design und Code, um digitale Produkte zu entwickeln, die klar, intuitiv und visuell stimmig sind.
          </p>

          <div className="badges">
            <span className="badge">User Experience Design</span>
            <span className="badge">Interaction Design</span>
            <span className="badge">Prototyping</span>
            <span className="badge">React / Next.js</span>
            <span className="badge">Python</span>
          </div>
        </div>

        <div className="aboutImageWrap">
          <Image
            src="/ella.jpg"
            alt="Portrait von Ella"
            fill
            className="aboutImage"
            priority
            sizes="(max-width: 900px) 100vw, 320px"
          />
        </div>
      </section>

      <section className="aboutContentGrid">
        <article className="aboutCard cardPink">
          <h2>Design & Konzeption</h2>
          <p>
            Ich entwickle Gestaltungskonzepte mit Fokus auf visuelle Klarheit, Struktur und Typografie. Dabei arbeite ich mit Layout, Hierarchie und Interaktion, um Interfaces zu entwerfen, die sowohl ästhetisch als auch funktional überzeugen. Von ersten Ideen über Wireframes bis hin zu interaktiven Prototypen begleite ich den gesamten Designprozess und gestalte Lösungen, die klar und funktional sind.
          </p>
        </article>

        <article className="aboutCard cardBlue">
          <h2>Software Engineering & Webentwicklung</h2>
          <p>
            Ich setze digitale Konzepte technisch um und arbeite mit modernen Webtechnologien wie React und Next.js. Dabei lege ich Wert auf saubere Struktur, nachvollziehbaren Code und performante Anwendungen. Von der Planung über die Umsetzung bis hin zu Testing und Optimierung entwickle ich Anwendungen sowohl eigenständig als auch im Team.
          </p>
        </article>

        <article className="aboutCard cardGreen">
          <h2>Service Design & Nutzerforschung</h2>
          <p>
            Ich analysiere Nutzungskontexte und Bedürfnisse, um daraus durchdachte digitale Lösungen abzuleiten.
            Durch Research, Strukturierung und iterative Verbesserung optimiere ich Produkte im Hinblick auf Usability, Accessibility und Interaktion. Mein Ziel ist es, digitale Anwendungen zu gestalten, die intuitiv funktionieren und echten Mehrwert bieten.
          </p>
        </article>

        <div className="skillsPanel">
          <SkillsList />
        </div>
      </section>

      <div className="aboutSocialsRow">
        <div className="aboutSocials">
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}