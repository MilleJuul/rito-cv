'use client'


// Thread path: starts at yarn ball (right), sweeps to text (left), drops to next section, repeats
// Coordinates map to viewBox 1200×5500 which covers the full page height
const THREAD_PATH = `
  M 870 340
  C 870 340, 760 380, 580 420
  C 400 460, 160 460, 120 520
  C 80  580, 200 700, 600 760
  C 800 790, 1050 830, 1060 890
  C 1070 950, 900 1020, 600 1060
  C 300 1100, 80  1120, 60  1180
  C 40  1240, 300 1340, 600 1380
  C 900 1420, 1100 1440, 1100 1500
  C 1100 1560, 860 1600, 600 1620
  C 340 1640, 80  1650, 60  1720
  C 40  1790, 300 1900, 600 1940
  C 900 1980, 1080 2000, 1080 2070
  C 1080 2140, 860 2180, 600 2210
  C 340 2240, 80  2260, 60  2340
  C 40  2420, 300 2540, 600 2580
  C 900 2620, 1060 2640, 1060 2710
  C 1060 2780, 800 2820, 600 2860
  C 400 2900, 160 2930, 120 3010
  C 80  3090, 300 3200, 600 3240
  C 900 3280, 1040 3300, 1040 3370
  C 1040 3440, 800 3480, 600 3520
`

const THREAD_LENGTH = 6500

export default function CVPage() {
  return (
    <div className="relative min-h-screen font-sans" style={{ background: '#FFF8F2', color: '#1a1a1a' }}>
      <style>{`
        @keyframes draw-thread {
          from { stroke-dashoffset: ${THREAD_LENGTH}; }
          to   { stroke-dashoffset: 0; }
        }
        .thread-draw {
          stroke-dasharray: ${THREAD_LENGTH};
          stroke-dashoffset: ${THREAD_LENGTH};
          animation: draw-thread 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.3s;
        }
        .thread-glow {
          stroke-dasharray: ${THREAD_LENGTH};
          stroke-dashoffset: ${THREAD_LENGTH};
          animation: draw-thread 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.3s;
        }
      `}</style>

      {/* SVG Thread — absolute, scrolls with the page */}
      <svg
        aria-hidden="true"
        className="pointer-events-none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
        viewBox="0 0 1200 5500"
        preserveAspectRatio="xMidYMin meet"
      >
        {/* Glow */}
        <path
          className="thread-glow"
          d={THREAD_PATH}
          fill="none"
          stroke="#F59E0B"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.18"
        />
        {/* Main thread */}
        <path
          className="thread-draw"
          d={THREAD_PATH}
          fill="none"
          stroke="#F59E0B"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>

      {/* NAVBAR */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-sm"
        style={{ background: 'rgba(255,248,242,0.95)', borderBottom: '1px solid #F3E8D8' }}
      >
        <div className="flex items-center gap-2 font-bold text-sm tracking-widest" style={{ color: '#F59E0B' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#F59E0B" strokeWidth="2" />
            <path d="M6 10 Q10 6 14 10 Q10 14 6 10Z" fill="#F59E0B" />
          </svg>
          RITO EXPERT ANSØGER
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium" style={{ color: '#555' }}>
          <a href="#projekter" className="hover:text-amber-500 transition-colors">Projekter</a>
          <a href="#roed-traad" className="hover:text-amber-500 transition-colors">Den Røde Tråd</a>
          <a href="#vaerdi" className="hover:text-amber-500 transition-colors">Værdi</a>
          <a href="#om-mig" className="hover:text-amber-500 transition-colors">Om Mig</a>
        </div>
        <a
          href="#kontakt"
          className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
          style={{ background: '#F59E0B' }}
        >
          Kontakt Mig
        </a>
      </nav>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: '#FFF3E0', border: '1px solid #FBBF24', color: '#92400E' }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1l1.2 2.4L10 4.2l-2 1.9.5 2.7L6 7.5l-2.5 1.3.5-2.7-2-1.9 2.8-.8z" fill="#F59E0B" />
            </svg>
            Marketing Automation Specialist Pitch
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6" style={{ color: '#1a1a1a' }}>
            Jeg vil strikke<br />
            Ritos digitale<br />
            fremtid med{' '}
            <span style={{ color: '#F59E0B', fontStyle: 'italic' }}>AI-<br />magi</span>
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: '#555', maxWidth: '420px' }}>
            Kreativitet og data er mine to pinde. Jeg transformerer komplekse workflows til sømløse oplevelser, der skalerer Ritos succes.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projekter"
              className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ background: '#F59E0B' }}
            >
              Se mine løsninger
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3l5 5-5 5M3 8h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#om-mig"
              className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{ border: '2px solid #F59E0B', color: '#F59E0B', background: 'transparent' }}
            >
              Lær mig at kende
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Floating badge */}
          <div
            className="absolute top-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg z-10"
            style={{ background: 'white' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: '#F59E0B' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L11 7H16L12 10.5L13.5 16L9 12.5L4.5 16L6 10.5L2 7H7Z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm" style={{ color: '#1a1a1a' }}>Høj Effektivitet</div>
              <div className="text-xs" style={{ color: '#888' }}>Intelligente løsninger</div>
            </div>
          </div>

          {/* Yarn image placeholder with warm gradient */}
          <div
            className="w-80 h-80 md:w-96 md:h-96 rounded-3xl flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FFF3E0 0%, #FFECB3 100%)' }}
          >
            <YarnIllustration />
          </div>
        </div>
      </section>

      {/* PROJEKTER */}
      <section id="projekter" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black mb-3" style={{ color: '#1a1a1a' }}>Mine Case-masker til Rito</h2>
          <p className="text-lg" style={{ color: '#777' }}>
            Konkrete eksempler på hvordan jeg binder teknik og forretningsværdi sammen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl p-8 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: '#FFF8F2', border: '1px solid #F3E8D8' }}
            >
              <div className="self-start">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold tracking-widest"
                  style={{ background: '#F59E0B', color: 'white' }}
                >
                  {p.tag}
                </span>
              </div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: '#FFF3E0' }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#1a1a1a' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-16" style={{ background: '#F59E0B' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-5xl font-black mb-2">{s.value}</div>
              <div className="text-xs font-bold tracking-widest mb-1 opacity-90">{s.label}</div>
              <div className="text-sm opacity-75">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DEN RØDE TRÅD */}
      <section id="roed-traad" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-black mb-4" style={{ color: '#1a1a1a' }}>Den Røde Tråd i min tilgang</h2>
          <p className="text-lg leading-relaxed" style={{ color: '#555', maxWidth: '600px' }}>
            Min ambition er at blive en del af Rito-familien og bidrage med min ekspertise inden for AI og automatisering.
            Jeg ser ikke bare tal og koder – jeg ser muligheder for at gøre hver kundes kreative rejse endnu bedre.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ background: 'white', border: '2px solid #F3E8D8' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                style={{ background: '#FFF3E0' }}
              >
                {v.icon}
              </div>
              <h3 className="font-bold text-base" style={{ color: '#1a1a1a' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#F59E0B' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VAERDI – om mig / CTA */}
      <section id="om-mig" className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Photo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="w-32 h-32 rounded-3xl overflow-hidden shadow-xl"
              style={{ border: '4px solid white' }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-5xl"
                style={{ background: 'linear-gradient(135deg, #F3E8D8, #FBBF24)' }}
              >
                👤
              </div>
            </div>
            <div
              className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: '#F59E0B' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5S14.5 11.59 14.5 8 11.59 1.5 8 1.5zm-1 9.5L4.5 8.5l1.06-1.06L7 8.88l3.44-3.44L11.5 6.5 7 11z" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#1a1a1a' }}>
          Lad os skabe fremtidens Rito sammen
        </h2>
        <p className="text-lg leading-relaxed mb-10 mx-auto" style={{ color: '#666', maxWidth: '560px' }}>
          Som jeres næste Marketing Automation Specialist bringer jeg ikke kun tekniske færdigheder, men en dyb forståelse for
          jeres håndværks-univers. Jeg glæder mig til at vise, hvordan vi kan strikke endnu stærkere bånd til jeres kunder.
        </p>

        <div id="kontakt" className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:mil.juul.nielsen@gmail.com"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: '#F59E0B' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4l6 4.5L14 4M2 4h12v9H2V4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Book en samtale
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
            style={{ border: '2px solid #F59E0B', color: '#F59E0B' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="1" width="12" height="14" rx="1.5" stroke="#F59E0B" strokeWidth="1.5" />
              <path d="M5 5h6M5 8h6M5 11h4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Se mit fulde CV
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm" style={{ color: '#aaa', borderTop: '1px solid #F3E8D8' }}>
        © 2025 · Mille Juul Nielsen · Marketing Automation Specialist
      </footer>
    </div>
  )
}

function YarnIllustration() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main yarn ball */}
      <circle cx="110" cy="100" r="75" fill="#F59E0B" opacity="0.15" />
      <circle cx="110" cy="100" r="68" fill="#F59E0B" opacity="0.9" />
      {/* Yarn lines */}
      {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 110 + 68 * Math.cos(rad - 0.5)
        const y1 = 100 + 68 * Math.sin(rad - 0.5)
        const x2 = 110 + 68 * Math.cos(rad + 2.1)
        const y2 = 100 + 68 * Math.sin(rad + 2.1)
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} Q 110 100 ${x2} ${y2}`}
            stroke="#FFF3E0"
            strokeWidth="1.5"
            opacity="0.4"
            fill="none"
          />
        )
      })}
      {/* Tail */}
      <path d="M 175 115 Q 195 140 185 170 Q 178 185 165 188" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 165 188 Q 150 192 145 200" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

const projects = [
  {
    tag: 'AUTOMATISERING',
    title: 'Automatiseret Rapportering',
    desc: 'Jeg har transformeret tung manuel rapportering fra en proces på 2-5 dage pr. land til et fuldt automatiseret setup på tværs af 7 forskellige lande. Data flyder nu direkte ind i beslutningsgrundlaget uden forsinkelse.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M5 20 L10 14 L16 18 L22 8 L27 12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="20" r="4" stroke="#F59E0B" strokeWidth="2" />
        <line x1="18" y1="23" x2="20" y2="21" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'SALES INTELLIGENCE',
    title: 'Lead Enrichment Tool',
    desc: 'Udvikling af et værktøj, hvor indtastning af et firmanavn automatisk genererer en dybdegående rapport inkl. LinkedIn-profiler og strategiske indsigter. Dette bruges aktivt af 7 sælgere til at personliggøre deres outreach.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="12" cy="11" r="5" stroke="#F59E0B" strokeWidth="2" />
        <path d="M4 24 C4 19 8 17 12 17 C16 17 20 19 20 24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="18" r="4" stroke="#F59E0B" strokeWidth="2" />
        <line x1="20" y1="21" x2="22" y2="23" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="23" x2="27" y2="26" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'AI WORKFLOW',
    title: 'AI Katalogproduktion',
    desc: 'Ved at udnytte Claude og Claude Code har jeg reduceret produktionstiden for komplette produktkataloger fra flere måneder til under 30 minutter. En revolutionerende optimering af det kreative indholdsarbejde.',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect x="5" y="3" width="20" height="24" rx="2" stroke="#F59E0B" strokeWidth="2" />
        <path d="M9 9h12M9 13h12M9 17h8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 21h5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const stats = [
  { value: '40+', label: 'TIMER SPARET PR. LAND', desc: 'Massiv frigivelse af menneskelige ressourcer' },
  { value: '7', label: 'LANDE AUTOMATISERET', desc: 'Skaléring uden grænser og manuelle fejl' },
  { value: '<30m', label: 'KATALOGPRODUKTION', desc: 'Fra måneder til minutter med AI-kraft' },
]

const values = [
  {
    title: 'Strategisk AI',
    desc: 'Identificering af de rigtige teknologier til Ritos behov.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#F59E0B" strokeWidth="1.8" />
        <path d="M8 11 Q11 7 14 11 Q11 15 8 11Z" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    title: 'Sømløs Integration',
    desc: 'Forbindelse af systemer uden at miste den røde tråd.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="5" cy="11" r="3" stroke="#F59E0B" strokeWidth="1.8" />
        <circle cx="17" cy="11" r="3" stroke="#F59E0B" strokeWidth="1.8" />
        <circle cx="11" cy="5" r="3" stroke="#F59E0B" strokeWidth="1.8" />
        <circle cx="11" cy="17" r="3" stroke="#F59E0B" strokeWidth="1.8" />
        <path d="M8 11h6M11 8v6" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Kreativ Værdi',
    desc: 'Teknikken tjener altid den kreative slutbrugeroplevelse.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="4" stroke="#F59E0B" strokeWidth="1.8" />
        <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.22 4.22l2.12 2.12M15.66 15.66l2.12 2.12M4.22 17.78l2.12-2.12M15.66 6.34l2.12-2.12" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Skalerbar Vækst',
    desc: 'Løsninger der vokser i takt med Ritos ambitioner.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 15 L8 10 L12 13 L19 5" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5h4v4" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]
