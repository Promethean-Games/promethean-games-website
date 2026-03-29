const BASE = import.meta.env.BASE_URL;

const cards = [
  { src: `${BASE}images/fs-card-10.png`, rotate: -24, x: -60, z: 1 },
  { src: `${BASE}images/fs-card-j.png`,  rotate: -12, x: -30, z: 2 },
  { src: `${BASE}images/fs-card-q.png`,  rotate:   0, x:   0, z: 3 },
  { src: `${BASE}images/fs-card-k.png`,  rotate:  12, x:  30, z: 4 },
  { src: `${BASE}images/fs-card-a.png`,  rotate:  24, x:  60, z: 5 },
];

export function FannedCards() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
      {/* Subtle felt texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative flex items-end justify-center" style={{ height: "88%", width: "100%" }}>
        {cards.map((card, i) => (
          <img
            key={i}
            src={card.src}
            alt={`Full Swing card ${i + 1}`}
            className="absolute bottom-0 transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
            style={{
              height: "82%",
              width: "auto",
              transform: `translateX(${card.x}px) rotate(${card.rotate}deg)`,
              transformOrigin: "bottom center",
              zIndex: card.z,
              borderRadius: "6px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
