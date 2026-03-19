// Autorin: Ella K.

import { skills } from "@/data/skills";

function dots(level: number) {
  return "●".repeat(level) + "○".repeat(5 - level);
}

export default function SkillsList() {
  return (
    <div className="card">
      <h3>Skills</h3>
      <div className="hr" />
      <div style={{ display: "grid", gap: 10 }}>
        {skills.map((s) => (
          <div key={s.name} style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <div>{s.name}</div>
            <div className="pink" aria-label={`Level ${s.level} von 5`}>
              {dots(s.level)}
            </div>
          </div>
        ))}
      </div>
      <p className="small" style={{ marginTop: 12 }}>
        Skala: 1 (niedrig) bis 5 (hoch)
      </p>
    </div>
  );
}