import './GeoBg.css';

export default function GeoBg() {
  return (
    <div className="geo-page-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── BIG FILLED SLABS ── much higher opacity */}

        {/* Top-right dominant orange wedge */}
        <polygon points="980,0 1440,0 1440,500"      fill="rgba(195,85,35,0.18)" />
        <polygon points="1180,0 1440,0 1440,280"     fill="rgba(215,105,30,0.22)" />
        <polygon points="1360,0 1440,0 1440,110"     fill="rgba(235,130,40,0.28)" />

        {/* Top-left warm grey accent */}
        <polygon points="0,0 280,0 0,240"            fill="rgba(160,110,70,0.14)" />
        <polygon points="0,0 130,0 0,100"            fill="rgba(190,110,55,0.18)" />

        {/* Mid-right red-orange slab */}
        <polygon points="1240,200 1440,80 1440,520"  fill="rgba(180,65,25,0.15)" />

        {/* Bottom-left slabs */}
        <polygon points="0,620 0,900 400,900"        fill="rgba(130,100,70,0.16)" />
        <polygon points="0,790 0,900 200,900"        fill="rgba(175,100,50,0.20)" />

        {/* Bottom-right warm triangles */}
        <polygon points="1080,900 1440,640 1440,900" fill="rgba(190,78,32,0.17)" />
        <polygon points="1320,900 1440,800 1440,900" fill="rgba(225,115,38,0.24)" />

        {/* Centre-left faint accent */}
        <polygon points="0,320 0,540 160,470 110,320" fill="rgba(160,120,75,0.10)" />

        {/* Mid-page subtle warm diamond */}
        <polygon points="640,380 780,300 860,420 720,500" fill="rgba(200,95,40,0.07)" />

        {/* ── OUTLINE / WIREFRAME SHAPES ── bolder strokes */}

        {/* Large rotating hexagon mid-right */}
        <polygon
          points="1150,200 1280,135 1385,200 1385,355 1255,420 1150,355"
          stroke="rgba(201,169,110,0.30)" strokeWidth="1.5" fill="none"
          className="geo-spin" style={{ transformOrigin: '1267px 277px' }}
        />
        {/* Inner hex counter-rotating */}
        <polygon
          points="1192,232 1272,188 1342,232 1342,322 1265,368 1192,322"
          stroke="rgba(201,169,110,0.18)" strokeWidth="1" fill="none"
          className="geo-spin-rev" style={{ transformOrigin: '1267px 278px' }}
        />

        {/* Floating diamond bottom-centre */}
        <polygon
          points="660,770 750,705 840,770 750,835"
          stroke="rgba(201,169,110,0.25)" strokeWidth="1.5" fill="rgba(201,169,110,0.04)"
          className="geo-float"
        />

        {/* Floating triangle mid-left */}
        <polygon
          points="45,390 175,325 175,455"
          stroke="rgba(210,110,50,0.30)" strokeWidth="1.5" fill="rgba(195,85,35,0.05)"
          className="geo-float-slow"
        />

        {/* Floating triangle top-centre */}
        <polygon
          points="580,50 690,0 750,90"
          stroke="rgba(201,169,110,0.20)" strokeWidth="1.5" fill="none"
          className="geo-float" style={{ animationDelay: '2s' }}
        />

        {/* Small accent triangle bottom-left area */}
        <polygon
          points="160,820 260,760 280,840"
          stroke="rgba(195,100,50,0.25)" strokeWidth="1" fill="none"
          className="geo-float-slow" style={{ animationDelay: '1s' }}
        />

        {/* ── DIAGONAL RULE LINES ── more visible */}
        <line x1="820"  y1="0"   x2="1440" y2="580" stroke="rgba(201,169,110,0.09)" strokeWidth="1" />
        <line x1="920"  y1="0"   x2="1440" y2="430" stroke="rgba(201,169,110,0.06)" strokeWidth="1" />
        <line x1="0"    y1="560" x2="440"  y2="900" stroke="rgba(185,95,40,0.08)"   strokeWidth="1" />
        <line x1="0"    y1="440" x2="300"  y2="900" stroke="rgba(185,95,40,0.05)"   strokeWidth="1" />



        {/* ── CORNER BRACKETS ── bolder */}
        {/* Top-left */}
        <path d="M55 35 L28 35 L28 80"
          stroke="rgba(201,169,110,0.55)" strokeWidth="2" strokeLinecap="round" fill="none"
          className="geo-bracket-draw" />
        {/* Top-right */}
        <path d="M1385 35 L1412 35 L1412 80"
          stroke="rgba(215,105,35,0.45)" strokeWidth="2" strokeLinecap="round" fill="none"
          className="geo-bracket-draw" style={{ animationDelay: '0.3s' }} />
        {/* Bottom-right */}
        <path d="M1385 865 L1412 865 L1412 820"
          stroke="rgba(201,169,110,0.40)" strokeWidth="2" strokeLinecap="round" fill="none"
          className="geo-bracket-draw" style={{ animationDelay: '0.5s' }} />
        {/* Bottom-left */}
        <path d="M55 865 L28 865 L28 820"
          stroke="rgba(185,95,40,0.40)" strokeWidth="2" strokeLinecap="round" fill="none"
          className="geo-bracket-draw" style={{ animationDelay: '0.7s' }} />

      </svg>
    </div>
  );
}