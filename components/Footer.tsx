// Autorin: Ella K.

export default function Footer() {
  const now = new Date();
  const formatted = now.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer className="footer">
      <div className="footerInner">
        <div>© 2025 Ella K.</div>
        <div>Seitenaufruf: {formatted}</div>
      </div>
    </footer>
  );
}