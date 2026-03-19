// Autorin: Ella K.

const socials = [
  { label: "LinkedIn", href: "http://linkedin.com/in/ella-klein-7b69b2390" },
  { label: "GitHub", href: "https://github.com/ellaklein" },
  { label: "GitLab", href: "https://gitlab.lrz.de/000000003B9CB75E" },
];

export default function SocialLinks() {
  return (
    <ul className="socialList">
      {socials.map((s) => (
        <li key={s.href}>
          <a className="socialLink" href={s.href} target="_blank" rel="noreferrer">
            {s.label} <span aria-hidden>→</span>
          </a>
        </li>
      ))}
    </ul>
  );
}