import { Link } from 'react-router-dom';

type Props = {
  compact?: boolean;
};

export default function Logo({ compact = false }: Props) {
  return (
    <Link to="/" className="logo" aria-label="KORIS ENERGY — Accueil">
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        aria-hidden="true"
        style={{ display: 'block', flexShrink: 0 }}
      >
        <rect
          x="0.5"
          y="0.5"
          width="31"
          height="31"
          rx="3"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        <path
          d="M11 9v14M11 16l7-7M11 16l7 7"
          stroke="#22d3ee"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="square"
        />
      </svg>
      {!compact && (
        <span className="logo-word">
          KORIS<span className="logo-word-accent">&nbsp;ENERGY</span>
        </span>
      )}
    </Link>
  );
}
