export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#g)" />
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fontSize="48"
          fill="white"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          A
        </text>
        <circle cx="72" cy="28" r="5" fill="#34D399" />
      </svg>

      <span className="text-xl font-bold tracking-wide">
        AFSA <span className="text-indigo-600">LABS</span>
      </span>
    </div>
  );
}
