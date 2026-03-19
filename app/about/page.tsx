// Autorin: Ella K.

import Image from "next/image";
import SkillsList from "@/components/SkillsList";

export default function AboutPage() {
  return (
    <main className="container">
      <div className="aboutGrid">
        <div className="aboutImageWrap">
          <Image
            src="/ella.jpg"
            alt="Portrait von Ella"
            fill
            className="aboutImage"
            priority
            sizes="(max-width: 900px) 100vw, 260px"
          />
        </div>

        <div className="aboutText">
          <h1>About me</h1>
          <p>
           Ein zentraler Bestandteil meiner Arbeit ist das Verständnis von Entwicklungs- und Designprozessen, von der Konzeption über interaktive Prototypen bis hin zur Evaluation. Ich beschäftige mich intensiv mit Interface-Gestaltung, Typografie und der bewussten Auseinandersetzung mit gestalterischen Entscheidungen, sowohl visuell als auch konzeptionell.
          </p>

           <p>
            Im Bereich Software Engineering und Webentwicklung arbeite ich mit grundlegenden Prinzipien des Softwareentwicklungszyklus, Architekturkonzepten und Vorgehensmodellen. Ich entwickle Anwendungen sowohl eigenständig als auch im Team und setze geeignete Werkzeuge und Methoden gezielt ein – von der Planung über die Umsetzung bis hin zu Testing, Performance und Sicherheit.
          </p>

           <p>
           Dabei beschäftige ich mich ebenfalls intensiv mit Service Design und nutzerzentrierter Forschung. Ich analysiere Anforderungen im Anwendungskontext, leite daraus Konzepte ab und optimiere digitale Produkte im Hinblick auf Usability, Accessibility und Interaktion. Mein Ziel ist es, digitale Lösungen zu gestalten, die verständlich, sinnvoll und für Nutzer:innen relevant sind.
           </p>

          <div className="badges">
            <span className="badge">UI/UX</span>
            <span className="badge">Web Development</span>
            <span className="badge">Creative Coding</span>
            <span className="badge">3D Interaction</span>
            <span className="badge">Service Design</span>
          </div>
        </div>

        <div className="aboutSkills">
          <SkillsList />
        </div>
      </div>
    </main>
  );
}