// Autorin: Ella K.

import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  return (
    <main className="container">
      <h1 className="pageTitle">Kontakt</h1>
      <p className="muted">
        Schicken Sie mir gerne eine Anfrage.
      </p>

      <div className="contactGrid">
        <section className="card">
          <h2 className="sectionTitle">Kontaktformular</h2>
          <ContactForm />
        </section>

        <aside className="card">
          <h2 className="sectionTitle">Socials</h2>
          <p className="muted">Ich bin auch hier zu finden:</p>
          <SocialLinks />
        </aside>
      </div>
    </main>
  );
}