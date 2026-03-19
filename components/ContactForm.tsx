// Autorin: Ella K.
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  async function onSubmit(e: React.FormEvent) {
  e.preventDefault();
  setStatus(null);

  if (!name.trim() || !email.trim() || !message.trim()) {
    setStatus("Bitte alle Felder ausfüllen.");
    return;
  }

  if (!isValidEmail(email.trim())) {
    setStatus("Bitte eine gültige E-Mail-Adresse eingeben.");
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("Nachricht gesendet ");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Fehler beim Senden ");
    }
  } catch {
    setStatus("Server nicht erreichbar ");
  }
}

  return (
    <form onSubmit={onSubmit} className="form">
      <label className="label">
        Name
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ihr Name"
        />
      </label>

      <label className="label">
        E-Mail
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@mail.com"
        />
      </label>

      <label className="label">
        Nachricht
        <textarea
          className="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ihre Nachricht…"
          rows={6}
        />
      </label>

      <button className="btnPrimary" type="submit">Anfrage senden</button>

      {status && <p className="formStatus">{status}</p>}
    </form>
  );
}