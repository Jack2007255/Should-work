/* ==========================================================================
   Hand-built SVG background scenes.

   These are the real backgrounds — flat vector illustrations, no external
   requests, no missing-asset states. A generated video clip, when wired into
   SCENES in site.js, layers on top of the matching scene rather than
   replacing it, so the page looks complete at every stage.
   ========================================================================== */

/* Mini-ish side profile: short overhangs, upright screen, wheels pushed to the
   corners. Deliberately a silhouette rather than a badge-accurate rendering. */
function car(body, roof, wheel = '#141414') {
  return `
    <g class="car">
      <path d="M14,74 L14,50 Q14,44 22,42 L62,40 L84,16 Q88,12 96,12 L150,12
               Q158,12 162,17 L182,40 L198,43 Q206,45 206,52 L206,74 Z"
            fill="${body}"/>
      <path d="M88,20 Q90,18 96,18 L148,18 Q153,18 156,21 L168,39 L72,39 Z"
            fill="${roof}" opacity=".55"/>
      <rect x="86" y="11" width="72" height="7" rx="3.5" fill="${roof}"/>
      <circle cx="52" cy="74" r="18" fill="${wheel}"/>
      <circle cx="52" cy="74" r="8" fill="${body}" opacity=".7"/>
      <circle cx="170" cy="74" r="18" fill="${wheel}"/>
      <circle cx="170" cy="74" r="8" fill="${body}" opacity=".7"/>
    </g>`;
}

/* shared wrapper — slice keeps the composition centred at any aspect */
const frame = (inner) => `
  <svg class="scene" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"
       role="img" aria-label="Illustrated driving scene" focusable="false">
    ${inner}
  </svg>`;

const SCENE_SVG = {

  /* ---------- hero: sunset coastal road ---------- */
  hero: frame(`
    <defs>
      <linearGradient id="skyB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0"   stop-color="#1d1734"/>
        <stop offset=".42" stop-color="#6f3159"/>
        <stop offset=".70" stop-color="#cf6440"/>
        <stop offset="1"   stop-color="#f7b878"/>
      </linearGradient>
      <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#e08048"/>
        <stop offset="1" stop-color="#59355a"/>
      </linearGradient>
      <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2333"/>
        <stop offset="1" stop-color="#14111c"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="800" fill="#1d1734"/>
    <rect width="1200" height="470" fill="url(#skyB)"/>
    <circle cx="880" cy="372" r="78" fill="#ffd9a0" opacity=".95"/>
    <circle cx="880" cy="372" r="146" fill="#ffb277" opacity=".16"/>

    <!-- low ridges on the waterline; kept thin so they read as distant land
         rather than a block behind the headline -->
    <path d="M0,450 L120,422 L250,448 L370,434 L470,462 L470,472 L0,472 Z" fill="#33264a"/>
    <path d="M1200,446 L1090,418 L985,450 L1200,472 Z" fill="#33264a"/>

    <!-- sea -->
    <rect y="470" width="1200" height="98" fill="url(#sea)"/>
    <g fill="#ffcf9a" opacity=".45">
      <rect x="826" y="482" width="112" height="3" rx="1.5"/>
      <rect x="850" y="500" width="66"  height="3" rx="1.5"/>
      <rect x="810" y="518" width="140" height="3" rx="1.5"/>
      <rect x="846" y="536" width="80"  height="3" rx="1.5"/>
    </g>

    <!-- clifftop, then the road sweeping up to the right -->
    <path d="M0,588 L1200,546 L1200,800 L0,800 Z" fill="#1a1626"/>
    <path d="M470,800 L898,562 L1062,562 L1400,800 Z" fill="url(#road)"/>
    <g stroke="#f4e6c8" stroke-width="7" stroke-linecap="round" opacity=".55">
      <line x1="972" y1="576" x2="966" y2="606"/>
      <line x1="957" y1="644" x2="948" y2="690"/>
      <line x1="936" y1="740" x2="924" y2="800"/>
    </g>

    <!-- car on the road, right of the headline, backlit by the sun -->
    <ellipse cx="975" cy="622" rx="150" ry="14" fill="#000" opacity=".4"/>
    <g transform="translate(805,484) scale(1.5)">
      ${car('#1a1626', '#5d5270')}
    </g>
  `),

  /* ---------- electric: wet city at night ---------- */
  electric: frame(`
    <defs>
      <linearGradient id="night" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0"   stop-color="#080d1c"/>
        <stop offset=".55" stop-color="#122144"/>
        <stop offset="1"   stop-color="#1b2b4d"/>
      </linearGradient>
      <linearGradient id="wet" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#16233f"/>
        <stop offset="1" stop-color="#070b16"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="800" fill="url(#night)"/>

    <!-- skyline -->
    <g fill="#0a1226">
      <rect x="40"  y="180" width="130" height="360"/>
      <rect x="190" y="250" width="90"  height="290"/>
      <rect x="300" y="130" width="150" height="410"/>
      <rect x="470" y="220" width="110" height="320"/>
      <rect x="600" y="160" width="140" height="380"/>
      <rect x="760" y="240" width="100" height="300"/>
      <rect x="880" y="120" width="160" height="420"/>
      <rect x="1060" y="230" width="120" height="310"/>
    </g>
    <!-- lit windows -->
    <g fill="#ffd77a" opacity=".85">
      <rect x="62"  y="206" width="12" height="16"/><rect x="92"  y="246" width="12" height="16"/>
      <rect x="128" y="206" width="12" height="16"/><rect x="62"  y="300" width="12" height="16"/>
      <rect x="330" y="164" width="12" height="16"/><rect x="376" y="204" width="12" height="16"/>
      <rect x="410" y="164" width="12" height="16"/><rect x="330" y="270" width="12" height="16"/>
      <rect x="626" y="196" width="12" height="16"/><rect x="676" y="240" width="12" height="16"/>
      <rect x="906" y="156" width="12" height="16"/><rect x="962" y="200" width="12" height="16"/>
      <rect x="1006" y="156" width="12" height="16"/><rect x="906" y="288" width="12" height="16"/>
    </g>
    <g fill="#7ce7ff" opacity=".7">
      <rect x="212" y="286" width="12" height="16"/><rect x="500" y="256" width="12" height="16"/>
      <rect x="790" y="276" width="12" height="16"/><rect x="1092" y="266" width="12" height="16"/>
    </g>

    <!-- neon signage -->
    <rect x="196" y="360" width="76" height="9" rx="4.5" fill="#ff4d94" opacity=".9"/>
    <rect x="770" y="330" width="90" height="9" rx="4.5" fill="#4de0ff" opacity=".9"/>
    <rect x="1070" y="392" width="66" height="9" rx="4.5" fill="#e8ec2f" opacity=".85"/>

    <!-- wet road -->
    <rect y="540" width="1200" height="260" fill="url(#wet)"/>
    <g opacity=".38">
      <rect x="200" y="560" width="70" height="150" fill="#ff4d94"/>
      <rect x="775" y="560" width="80" height="180" fill="#4de0ff"/>
      <rect x="1072" y="560" width="60" height="120" fill="#e8ec2f"/>
    </g>
    <g stroke="#dfe7f5" stroke-width="6" stroke-linecap="round" opacity=".3">
      <line x1="120" y1="690" x2="230" y2="690"/>
      <line x1="330" y1="690" x2="440" y2="690"/>
      <line x1="540" y1="690" x2="650" y2="690"/>
      <line x1="750" y1="690" x2="860" y2="690"/>
      <line x1="960" y1="690" x2="1070" y2="690"/>
    </g>

    <ellipse cx="820" cy="706" rx="190" ry="18" fill="#000" opacity=".45"/>
    <g transform="translate(640,548) scale(1.7)">
      ${car('#1d3b6e', '#dce8ff')}
    </g>
    <!-- headlight wash thrown forward onto the wet surface -->
    <g fill="#8ff0ff" opacity=".5">
      <rect x="556" y="648" width="170" height="6" rx="3"/>
      <rect x="520" y="672" width="126" height="5" rx="2.5"/>
    </g>
  `),

  /* ---------- cooper 3-door: mountain switchback ---------- */
  cooper3: frame(`
    <rect width="1200" height="800" fill="#9fd9e4"/>
    <circle cx="990" cy="150" r="66" fill="#fff6d8"/>
    <path d="M0,470 L250,270 L430,430 L620,250 L840,470 L1200,300 L1200,560 L0,560 Z" fill="#4c7f76"/>
    <path d="M0,520 L300,380 L560,520 L820,400 L1200,540 L1200,620 L0,620 Z" fill="#37625d"/>
    <rect y="600" width="1200" height="200" fill="#2b2f33"/>
    <path d="M-40,800 L420,610 L780,610 L1240,800 Z" fill="#3b4046"/>
    <g stroke="#f2ead2" stroke-width="8" stroke-linecap="round" opacity=".8">
      <line x1="600" y1="640" x2="600" y2="676"/>
      <line x1="600" y1="712" x2="600" y2="800"/>
    </g>
    <g transform="translate(440,612) scale(1.85)">
      ${car('#c0392b', '#ffffff')}
    </g>
  `),

  /* ---------- cooper 5-door: city daylight ---------- */
  cooper5: frame(`
    <rect width="1200" height="800" fill="#cfe4f2"/>
    <g fill="#adc4d6">
      <rect x="60"  y="200" width="150" height="400"/>
      <rect x="240" y="280" width="120" height="320"/>
      <rect x="390" y="160" width="170" height="440"/>
      <rect x="590" y="250" width="130" height="350"/>
      <rect x="750" y="190" width="160" height="410"/>
      <rect x="940" y="290" width="200" height="310"/>
    </g>
    <g fill="#eaf3fa" opacity=".85">
      <rect x="86"  y="230" width="18" height="24"/><rect x="130" y="290" width="18" height="24"/>
      <rect x="420" y="196" width="18" height="24"/><rect x="480" y="256" width="18" height="24"/>
      <rect x="780" y="226" width="18" height="24"/><rect x="840" y="286" width="18" height="24"/>
      <rect x="980" y="326" width="18" height="24"/><rect x="1060" y="326" width="18" height="24"/>
    </g>
    <rect y="600" width="1200" height="200" fill="#5b636b"/>
    <g stroke="#f4f6f8" stroke-width="7" stroke-linecap="round" opacity=".75">
      <line x1="80"  y1="720" x2="200" y2="720"/>
      <line x1="300" y1="720" x2="420" y2="720"/>
      <line x1="520" y1="720" x2="640" y2="720"/>
      <line x1="740" y1="720" x2="860" y2="720"/>
      <line x1="960" y1="720" x2="1080" y2="720"/>
    </g>
    <g transform="translate(430,604) scale(1.85)">
      ${car('#1f4e8c', '#ffffff')}
    </g>
  `),

  /* ---------- convertible: coastline, roof down ---------- */
  convertible: frame(`
    <defs>
      <linearGradient id="csky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#5fc4e8"/><stop offset="1" stop-color="#bfeaf5"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#csky)"/>
    <circle cx="230" cy="150" r="58" fill="#fff8e0"/>
    <rect y="380" width="1200" height="160" fill="#1f9bb8"/>
    <g fill="#7fdcef" opacity=".8">
      <rect x="120" y="410" width="180" height="6" rx="3"/>
      <rect x="420" y="440" width="140" height="6" rx="3"/>
      <rect x="760" y="416" width="200" height="6" rx="3"/>
      <rect x="300" y="480" width="160" height="6" rx="3"/>
    </g>
    <path d="M0,540 L1200,510 L1200,800 L0,800 Z" fill="#e6d4a8"/>
    <rect y="620" width="1200" height="180" fill="#4a4e52"/>
    <g stroke="#f6f1e2" stroke-width="7" stroke-linecap="round" opacity=".8">
      <line x1="140" y1="716" x2="270" y2="716"/>
      <line x1="380" y1="716" x2="510" y2="716"/>
      <line x1="620" y1="716" x2="750" y2="716"/>
      <line x1="860" y1="716" x2="990" y2="716"/>
    </g>
    <!-- roof-down: no roof band, lower screen line -->
    <g transform="translate(440,626) scale(1.85)">
      <path d="M14,74 L14,50 Q14,44 22,42 L62,40 L86,26 L166,26 L182,40 L198,43
               Q206,45 206,52 L206,74 Z" fill="#d8dee3"/>
      <path d="M88,32 L160,32 L168,39 L74,39 Z" fill="#2b3138" opacity=".5"/>
      <circle cx="52" cy="74" r="18" fill="#141414"/><circle cx="52" cy="74" r="8" fill="#d8dee3" opacity=".7"/>
      <circle cx="170" cy="74" r="18" fill="#141414"/><circle cx="170" cy="74" r="8" fill="#d8dee3" opacity=".7"/>
    </g>
  `),

  /* ---------- aceman: bright modern plaza ---------- */
  aceman: frame(`
    <rect width="1200" height="800" fill="#eef2ec"/>
    <g fill="#d6ded6">
      <rect x="80"  y="140" width="240" height="420" rx="8"/>
      <rect x="360" y="220" width="180" height="340" rx="8"/>
      <rect x="580" y="120" width="260" height="440" rx="8"/>
      <rect x="880" y="240" width="240" height="320" rx="8"/>
    </g>
    <g fill="#b9c6bd" opacity=".7">
      <rect x="110" y="180" width="180" height="10" rx="5"/>
      <rect x="110" y="230" width="180" height="10" rx="5"/>
      <rect x="610" y="160" width="200" height="10" rx="5"/>
      <rect x="610" y="210" width="200" height="10" rx="5"/>
      <rect x="910" y="280" width="180" height="10" rx="5"/>
    </g>
    <rect y="560" width="1200" height="240" fill="#dfe4dd"/>
    <g stroke="#c6cec6" stroke-width="4">
      <line x1="0" y1="640" x2="1200" y2="640"/>
      <line x1="0" y1="720" x2="1200" y2="720"/>
      <line x1="300" y1="560" x2="300" y2="800"/>
      <line x1="700" y1="560" x2="700" y2="800"/>
    </g>
    <g transform="translate(430,570) scale(1.85)">
      ${car('#2f6b4f', '#f2f6f2')}
    </g>
    <ellipse cx="600" cy="726" rx="170" ry="14" fill="#8f9a90" opacity=".35"/>
  `),

  /* ---------- countryman: gravel forest track ---------- */
  countryman: frame(`
    <rect width="1200" height="800" fill="#8fb98c"/>
    <g fill="#2f5137">
      <path d="M60,560 L130,180 L200,560 Z"/><path d="M210,560 L280,240 L350,560 Z"/>
      <path d="M900,560 L970,200 L1040,560 Z"/><path d="M1050,560 L1120,260 L1190,560 Z"/>
    </g>
    <g fill="#3f6b45">
      <path d="M0,560 L70,300 L140,560 Z"/><path d="M330,560 L400,280 L470,560 Z"/>
      <path d="M760,560 L830,300 L900,560 Z"/>
    </g>
    <rect y="540" width="1200" height="260" fill="#4d6b46"/>
    <path d="M-60,800 L440,570 L760,570 L1260,800 Z" fill="#9c8a6b"/>
    <g fill="#b9a883" opacity=".7">
      <ellipse cx="520" cy="690" rx="60" ry="10"/>
      <ellipse cx="700" cy="740" rx="80" ry="12"/>
    </g>
    <g transform="translate(430,566) scale(1.9)">
      ${car('#5a636b', '#f0f2f4')}
    </g>
    <!-- dust -->
    <g fill="#c9bb9c" opacity=".55">
      <circle cx="330" cy="700" r="26"/><circle cx="290" cy="720" r="18"/><circle cx="360" cy="726" r="14"/>
    </g>
  `),

  /* ---------- jcw: circuit ---------- */
  jcw: frame(`
    <rect width="1200" height="800" fill="#b9c6cf"/>
    <rect y="300" width="1200" height="120" fill="#7d8b96"/>
    <g fill="#e8ec2f" opacity=".9">
      <rect x="60"  y="330" width="150" height="18" rx="4"/>
      <rect x="420" y="330" width="150" height="18" rx="4"/>
      <rect x="780" y="330" width="150" height="18" rx="4"/>
    </g>
    <rect y="420" width="1200" height="60" fill="#5f6b74"/>
    <!-- kerb -->
    <g>
      <rect y="480" width="1200" height="34" fill="#d63a2f"/>
      <g fill="#f4f4f4">
        <rect x="0"   y="480" width="80" height="34"/><rect x="160" y="480" width="80" height="34"/>
        <rect x="320" y="480" width="80" height="34"/><rect x="480" y="480" width="80" height="34"/>
        <rect x="640" y="480" width="80" height="34"/><rect x="800" y="480" width="80" height="34"/>
        <rect x="960" y="480" width="80" height="34"/><rect x="1120" y="480" width="80" height="34"/>
      </g>
    </g>
    <rect y="514" width="1200" height="286" fill="#41474d"/>
    <g stroke="#f2f4f6" stroke-width="6" stroke-linecap="round" opacity=".5">
      <line x1="100" y1="740" x2="240" y2="740"/>
      <line x1="380" y1="740" x2="520" y2="740"/>
      <line x1="660" y1="740" x2="800" y2="740"/>
      <line x1="940" y1="740" x2="1080" y2="740"/>
    </g>
    <!-- rolling into the corner, pitched under cornering load -->
    <g transform="translate(430,520) rotate(-3) scale(1.9)">
      ${car('#c8102e', '#ffffff')}
    </g>
  `)
};
