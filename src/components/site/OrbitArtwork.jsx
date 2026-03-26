export default function OrbitArtwork({ accent = "#d27b49" }) {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="omedale-orbit-fill" x1="84" y1="56" x2="408" y2="404" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1d242d" />
          <stop offset="0.58" stopColor="#141a21" />
          <stop offset="1" stopColor="#0d1116" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="460" height="460" rx="42" fill="url(#omedale-orbit-fill)" />
      <circle cx="240" cy="240" r="156" stroke="#f1e8dc" strokeOpacity="0.13" strokeWidth="1.5" />
      <circle cx="240" cy="240" r="104" stroke="#f1e8dc" strokeOpacity="0.11" strokeWidth="1.5" strokeDasharray="8 10" />
      <path d="M86 335C158 197 287 137 394 160" stroke="#f1e8dc" strokeOpacity="0.16" strokeWidth="2" strokeLinecap="round" />
      <path d="M138 96L372 383" stroke="#f1e8dc" strokeOpacity="0.08" strokeWidth="1.5" />
      <path d="M96 152H199" stroke="#f1e8dc" strokeOpacity="0.1" strokeWidth="1.5" />
      <path d="M280 336H384" stroke="#f1e8dc" strokeOpacity="0.1" strokeWidth="1.5" />
      <circle cx="240" cy="240" r="18" fill={accent} />
      <circle cx="345" cy="164" r="10" fill="#6d8b80" fillOpacity="0.9" />
      <circle cx="167" cy="322" r="12" fill="#f1e8dc" fillOpacity="0.88" />
      <path d="M132 203L140 220L157 228L140 236L132 253L124 236L107 228L124 220L132 203Z" fill="#f1e8dc" fillOpacity="0.9" />
      <path d="M348 274L354 287L367 293L354 299L348 312L342 299L329 293L342 287L348 274Z" fill={accent} fillOpacity="0.9" />
    </svg>
  );
}
