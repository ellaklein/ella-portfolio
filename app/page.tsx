// Autorin: Ella K.

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <section className="heroSplit">
        <div>
          <p className="muted heroKicker">Informatik &amp; Design · Hochschule München</p>

          <h1 className="title">
            Hi, ich bin <span className="accent">Ella</span>:)
          </h1>

          <p>
            Ich bin Studentin für Informatik und Design an der Hochschule München.
          </p>

          <p>
            Mich begeistert die Verbindung von technischem Denken und Gestaltung. Besonders interessiert
            mich, wie aus Ideen durch klare Strukturen und gutes Design interaktive digitale Erlebnisse entstehen.
            Dabei lege ich großen Wert auf intuitive Nutzerführung und eine ästhetische, durchdachte Umsetzung.
          </p>

          <div className="ctaRow">
            <Link className="buttonPrimary" href="/projects">Zu meinen Projekten</Link>
            <Link className="button" href="/about">About me</Link>
            <Link className="button" href="/contact">Kontakt</Link>
          </div>
        </div>

        
<div className="heroRight">
  <div className="portraitRing">
    <div className="portraitOuter">
      <div className="portraitInner">
        <Image
          src="/cutout2.png"
          alt="Portrait von Ella"
          fill
          priority
          sizes="250px"
          className="portraitImage"
        />
      </div>
    </div>
  </div>
</div>
      </section>
    </main>
  );
}