// Autorin: Ella K.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="nav">
        <Link 
          href="/" 
          className={`brand ${pathname === "/" ? "activeBrand" : ""}`}
        >
          Ellas Portfolio
        </Link>

        <div className="navLinks">
          <Link
            href="/about"
            className={pathname === "/about" ? "active" : ""}
          >
            About me
          </Link>

          <Link
            href="/projects"
            className={pathname === "/projects" ? "active" : ""}
          >
            Projekte
          </Link>
        </div>
      </nav>
    </header>
  );
}