import '@/assets/styles/Button.css';

export default function Button({
  onClick,
  disabled,
  type,
  width,
  className,
  label,
  style,
}) {
  return (
    <button
      disabled={disabled}
      type={type || 'button'}
      onClick={onClick}
      style={{ ...style, width }}
      className={className}
    >
      {label}
    </button>
  );
}
