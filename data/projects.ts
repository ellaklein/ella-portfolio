// Autorin: Ella K.

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  short: string;
  description: string;
  tags: string[];
  role?: string;
  tech?: string[];
  highlights?: string[];
  links?: { label: string; href: string }[];
  codeImage?: {
    src: string;
    alt: string;
    description?: string;
  };
};

export const projects: Project[] = [
  {
  slug: "oma-astra",
  title: "OmaAstra – Astrologischer Chatbot",
  subtitle: "Interaktiver Chatbot mit Fokus auf UX & Tonalität",
  short:
    "Charakterbasierter Chatbot mit Fokus auf Dialoggestaltung, Persönlichkeit und Nutzeransprache.",
  description:
    "OmaAstra entstand im ersten Semester als kreatives Coding-Projekt mit dem Ziel, einen Chatbot zu entwickeln, der nicht nur funktional reagiert, sondern eine klare Persönlichkeit besitzt. Im Mittelpunkt stand die Gestaltung eines konsistenten Charakters („Astrologie-Oma“) mit einer warmen, humorvollen und einfühlsamen Tonalität.\n\nDer Schwerpunkt lag auf der Konzeption der Dialogstruktur, der Definition von Antwortlogiken sowie dem iterativen Testen und Anpassen von Prompts. Neben technischen Aspekten spielte vor allem die User Experience eine zentrale Rolle: Wie spricht ein System Nutzer:innen an, wie fühlt sich ein Gespräch an und wie kann Vertrauen aufgebaut werden? Das Projekt verband technisches Denken mit erzählerischen und gestalterischen Entscheidungen und diente als Einstieg in interaktive, dialogbasierte Systeme.",
  tags: ["Chatbot", "UX", "UI", "Python", "Creative Coding"],
  role: "Konzept, UX, Umsetzung",
  tech: ["Python"],
    codeImage: {
      src: "/oma-astra-code.png",
      alt: "Codeausschnitt aus OmaAstra – Kompatibilitätslogik",
      description:
        "Der Codeausschnitt zeigt die Kompatibilitätslogik, bei der Sternzeichen astrologischen Elementen zugeordnet und auf Harmonie geprüft werden.",
    },
  },
  {
  slug: "hangman-webapp",
  title: "Hangman Webapp",
  subtitle: "Webspiel mit Express, TypeScript & REST API",
  short:
    "Serverseitiges Webspiel mit REST API, Spielzustand und klarer Architektur.",
  description:
    "Die Hangman Webapp ist ein webbasiertes Spiel mit serverseitiger Logik und REST-Schnittstellen. Ziel des Projekts war es, eine saubere Trennung zwischen Backend-Logik und Benutzeroberfläche umzusetzen sowie den Spielzustand zuverlässig auf dem Server zu verwalten.\n\nDie Anwendung verarbeitet Benutzereingaben, prüft diese serverseitig und gibt strukturierte Antworten über REST-Endpunkte zurück. Besonderer Wert wurde auf eine nachvollziehbare Architektur, Validierung von Eingaben und eine erweiterbare Codebasis gelegt.",
  tags: ["TypeScript", "Express", "REST", "Web"],
  role: "Fullstack Prototyp",
  tech: ["TypeScript", "Express", "REST"],
    codeImage: {
      src: "/hangmanexpress.png",
      alt: "Screenshot der Hangman Webanwendung",
      description:
        "Screenshot der Benutzeroberfläche des Hangman-Spiels mit Anzeige des aktuellen Spielzustands und der Eingabelogik.",
    },
  },
  {
  slug: "student-db",
  title: "Student DB",
  subtitle: "Next.js Anwendung mit externer API & Filterfunktion",
  short:
    "Frontend-Anwendung mit API-Anbindung, URL-basierter Filterlogik und Grid-Layout.",
  description:
    "Student DB ist eine Webanwendung zur Darstellung von Studierendenprofilen, die über eine externe API geladen werden. Ziel des Projekts war es, Daten dynamisch abzurufen, strukturiert darzustellen und über URL-Parameter filterbar zu machen.\n\nDie Filterlogik (z. B. nach Geschlecht) wird direkt über die URL gesteuert, wodurch sich Ansichten teilen und reproduzieren lassen. Zusätzlich wurde ein responsives Grid-Layout umgesetzt sowie auf eine klare Komponentenstruktur geachtet.",
  tags: ["Next.js", "React", "API", "TypeScript"],
  role: "Frontend",
  tech: ["Next.js", "React", "TypeScript"],
    codeImage: {
      src: "/studentdb.png",
      alt: "Screenshot der Student DB Anwendung",
      description:
        "Screenshot der Webanwendung mit Grid-Layout und Filterfunktion.",
    },
  },
    {
  slug: "deadmans-hand",
  title: "Deadman’s Hand Poker-Spiel",
  subtitle: "Interaktives 3D-Spiel mit Three.js",
  short:
    "Interaktives 3D-Pokerspiel mit Kamerasteuerung, Animationen und Fokus auf Atmosphäre.",
  description:
    "Deadman’s Hand entstand als Gruppenprojekt mit dem Ziel, ein interaktives Poker-Spiel im 3D-Raum umzusetzen. Im Mittelpunkt stand die visuelle Darstellung der Szene sowie die Umsetzung einer glaubwürdigen Spielatmosphäre. Mithilfe von Three.js wurden zahlreiche Objekte gerendert und zu einer komplexen 3D-Szene kombiniert.\n\nEin besonderer Fokus lag auf der Kamerasteuerung und Navigation: Nutzer:innen können in die Szene hinein- und herauszoomen, den Blickwinkel verändern und das Spiel aus verschiedenen Perspektiven erleben. Zusätzlich wurden Animationen und Interaktionen integriert, um das Spiel lebendiger wirken zu lassen. Das Projekt verbindet technisches Verständnis für 3D-Rendering und Szenenaufbau mit gestalterischen Entscheidungen zu Licht, Raum und Stimmung.",
  tags: ["Three.js", "JavaScript", "3D", "Interaction Design"],
  role: "Creative Coding / 3D (Gruppenarbeit)",
  tech: ["Three.js", "JavaScript"],
  codeImage: {
    src: "/deadmanshand.png",
    alt: "Screenshot von Deadman’s Hand – 3D Poker",
    description:
      "Screenshot der 3D-Spielszene.",
  },
},
    {
  slug: "reifenmuell-typografie",
  title: "Typografische Kunstsammlung",
  subtitle: "Typografie & visuelles Konzept zum Thema Abfall",
  short:
    "Typografische Serie zum Thema Müll mit Fokus auf Reifen und deren ästhetische Strukturen.",
  description:
    "Im Modul Typografie im 1.Semester bestand die Aufgabe darin, sich individuell auf eine Form von Müll zu fokussieren und daraus eine konzeptionelle, typografische Arbeit zu entwickeln. Ich entschied mich bewusst für Reifenmüll, da mich die starken Rillen, Muster und Strukturen von Autoreifen fasziniert haben.\n\nIn einer Serie von zehn Arbeiten habe ich diese charakteristischen Formen abstrahiert und typografisch interpretiert. Ziel war es, die vermeintliche Hässlichkeit von Abfall in eine ästhetische, visuelle Sprache zu übersetzen und gleichzeitig auf das Umweltproblem aufmerksam zu machen. Die Arbeiten wurden abschließend ausgestellt und zeigen die Verbindung von Typografie, Konzept und visueller Gestaltung.",
  tags: ["Typografie", "Konzept", "Grafikdesign", "Ausstellung"],
  role: "Konzept & Gestaltung",
  codeImage: {
    src: "/typo.jpg",
    alt: "Typografische Arbeit zum Thema Reifenmüll",
    description:
        "Foto von einem Teil meiner Arbeiten aus der Serie über Müll, während einer Ausstellung in der Hochschule München.",
    },
  },
  {
  slug: "se-grundlagen",
  title: "Software Engineering – Grundlagen & Modularbeit",
  subtitle: "OOP, Git-Workflow & Teamarbeit",
  short:
    "Mehrere Übungsprojekte und eine Modularbeit mit Fokus auf strukturierte Softwareentwicklung.",
  description:
    "Im Modul Software Engineering wurden grundlegende Konzepte der Softwareentwicklung praktisch umgesetzt. Dazu gehörten mehrere kleinere Übungsprojekte sowie eine umfangreichere Modularbeit, bei denen der Fokus auf sauberem Code, nachvollziehbarer Struktur und Teamarbeit lag.\n\nZu den Projekten zählten unter anderem ein MP3-Player mit zustandsbasierter Logik sowie weitere Anwendungen wie Clothing Mate oder ein Uno Spiel. Dabei ging es vor allem darum, Klassen sinnvoll zu modellieren, Zustände klar zu definieren und Verantwortlichkeiten im Code sauber zu trennen.\n\nEin wichtiger Bestandteil der Arbeit war außerdem der Umgang mit Git. Es wurde mit Branches, Merge Requests und einem vorgegebenen Workflow gearbeitet, wodurch der kollaborative Entwicklungsprozess realitätsnah nachvollzogen werden konnte. Die Projekte wurden überwiegend in Python umgesetzt und dienten dazu, ein grundlegendes Verständnis für Softwarearchitektur, Versionsverwaltung und Zusammenarbeit im Team zu entwickeln.",
  tags: ["Python", "OOP", "Git", "Software Engineering"],
  role: "Entwicklung",
  tech: ["Python", "Git"],
  codeImage: {
    src: "/softwareeng.png",
    alt: "Codeausschnitt aus dem UNO-Spiel (main.py)",
    description:
      "Der Ausschnitt zeigt den Einstiegspunkt (main.py) eines Uno Spiels mit Import der Spiel- und Spielerklassen, das Erstellen der Spielinstanz sowie den zentralen Game Loop (Runden spielen, Spielende prüfen)."
  }
},
{
  slug: "moosburg-website",
  title: "Moosburg Website Prototyp",
  subtitle: "UX/UI Konzept für eine moderne Stadtwebsite",
  short:
    "UX/UI-Prototyp für ein Bürgerportal mit Fokus auf transparente Anliegen-Verwaltung und intuitive Nutzerführung.",
  description:
    "Für dieses Projekt wurde ein Website-Prototyp für die Stadt Moosburg entwickelt, basierend auf einer realen Problemstellung: der umständlichen und intransparenten Kommunikation zwischen Bürgern und Stadtverwaltung.\n\nAls Grundlage dienten qualitative Interviews mit potenziellen Nutzern, in denen Bedürfnisse, Erwartungen und bestehende Herausforderungen im Umgang mit städtischen Anliegen erfasst wurden. Dabei wurde deutlich, dass vor allem Transparenz, einfache Bedienbarkeit und die Nachverfolgbarkeit von Anliegen zentrale Anforderungen sind.\n\nAuf Basis dieser Erkenntnisse entstand ein ganzheitliches UX/UI-Konzept, das den gesamten Prozess abbildet: vom Einreichen eines Anliegens über die Statusverfolgung bis hin zu Karten- und Statistikansichten. Besonderer Fokus lag auf einer klaren Informationsstruktur, intuitiver Navigation und einem verständlichen, zugänglichen Interface.\n\nDas Projekt verbindet User Research, konzeptionelles Denken und visuelles Design und zeigt, wie digitale Bürgerdienste nutzerzentrierter, transparenter und effizienter gestaltet werden können.",
  tags: ["UX/UI","Figma","User Research", "Prototyping", "Webdesign"],
  role: "Konzept & Design",
  tech: ["Figma"],
  codeImage: {
    src: "/Moosburg.png",
    alt: "Website-Prototyp für Moosburg",
    description:
      "Zentrale Screens des nutzerzentrierten Website-Prototyps zur Meldung und Nachverfolgung von Bürgeranliegen.",
  },
},
{
  slug: "notiz-webapp-security",
  title: "Notiz Web App – Security Projekt",
  subtitle: "Webanwendung mit Datenbank, Authentifizierung und gezielt eingebauten Schwachstellen",
  short:
    "Web-App mit Datenbankanbindung, Login-System und bewusst integrierten Sicherheitslücken zur Analyse und praktischen Angriffssimulation.",
  description:
    "Im Rahmen dieses Projekts wurde eine Notiz-Webanwendung mit Datenbankanbindung und grundlegender Benutzerverwaltung entwickelt. Neben klassischen Funktionen wie dem Erstellen, Speichern und Verwalten von Notizen stand vor allem der praktische Umgang mit Web Security im Mittelpunkt.\n\nEin besonderer Teil des Projekts bestand darin, gezielt Schwachstellen in die Anwendung einzubauen, um diese anschließend im Kurs gegenseitig in virtuellen Maschinen anzugreifen und zu analysieren. Dadurch konnten typische Sicherheitslücken nicht nur theoretisch verstanden, sondern praktisch nachvollzogen und ausgenutzt werden.\n\nDas Projekt verband Webentwicklung mit sicherheitsrelevanten Konzepten und vermittelte ein besseres Verständnis dafür, wie Angriffe auf Webanwendungen funktionieren, welche Risiken durch unsichere Implementierungen entstehen und warum Sicherheit bereits bei der Entwicklung mitgedacht werden muss.",
  tags: ["Security", "Web", "Datenbank", "Authentication", "VM"],
  role: "Konzept & Umsetzung",
  tech: ["JavaScript", "Node.js", "Database"],
  codeImage: {
    src: "/security.png",
    alt: "Screenshot der Notiz Web App",
    description:
      "Bearbeitungsansicht einer Notiz innerhalb der Web App.",
  },
},
{
  slug: "informationsdesign-diagramme",
  title: "Informationsdesign – Interaktive Datenvisualisierung",
  subtitle: "Webanwendung zur Analyse persönlicher Bilddaten",
  short:
    "Interaktive Webanwendung mit Diagrammen zur Auswertung eigener Bilddaten nach Zeit, Ort und Nutzung.",
  description:
    "Im Rahmen des Moduls Informationsdesign habe ich eine Webanwendung entwickelt, die meine persönlichen Bilddaten aus dem Jahr 2025 untersucht und visuell aufbereitet.\n\nGrundlage des Projekts waren eigene Fotos, deren Metadaten – wie Zeitstempel, GPS-Daten und Farbwerte – ausgewertet wurden. Daraus entstanden mehrere Diagramme, die unterschiedliche Perspektiven auf das Jahr eröffnen, etwa zeitliche Verläufe, geografische Verteilungen und visuelle Muster.\n\nEin Teil der Visualisierungen ist interaktiv gestaltet und lädt dazu ein, die Daten eigenständig zu erkunden. Die Anwendung ist als scrollbasierte Seite aufgebaut, bei der die Inhalte schrittweise erscheinen und so eine visuelle Erzählung über das Jahr entsteht.\n\nErgänzt wird die Anwendung durch eine monatliche Slideshow mit ausgewählten Bildern, die die Daten auf persönliche und greifbare Weise erfahrbar macht.\n\nDas Projekt verbindet Daten, Gestaltung und Interaktion und zeigt, wie sich persönliche Informationen in eine verständliche und erzählerische Form übersetzen lassen.",
  tags: ["Informationsdesign", "Datenvisualisierung", "Svelte", "JavaScript"],
  role: "Konzept & Umsetzung",
  tech: ["Svelte", "JavaScript"],
  codeImage: {
    src: "/infodesign.png",
    alt: "Interaktive Diagramme der Webanwendung",
    description:
      "Monatliche Slideshow am Ende der Anwendung; am oberen Rand ist die Kartenansicht mit einem ausgewählten Ort sichtbar, am unteren Rand der Footer.",
  },
},
];