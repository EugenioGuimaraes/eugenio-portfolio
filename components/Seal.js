export default function Seal({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18.5" stroke="#C9A55C" strokeWidth="1" />
      <circle cx="20" cy="20" r="13.5" stroke="#C9A55C" strokeWidth="0.6" opacity="0.5" />
      <path d="M20 9 L20 31 M9 20 L31 20" stroke="#C9A55C" strokeWidth="0.6" opacity="0.4" />
      <path d="M20 12 L26 20 L20 28 L14 20 Z" stroke="#C9A55C" strokeWidth="1" />
    </svg>
  );
}
