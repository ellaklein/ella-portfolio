// Autorin: Ella K.

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="nav">
        <Link href="/" className="brand">Ellas Portfolio</Link>

        <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/about">About me</Link>
          <Link href="/projects">Projekte</Link>
        </nav>
      </div>
    </header>
  );
}