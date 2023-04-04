import '@/assets/styles/Button.css';

export default function Button({ onClick, width, className, label, style }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...style, width }}
      className={className}
    >
      {label}
    </button>
  );
}
