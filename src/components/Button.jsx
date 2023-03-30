import "@/assets/styles/Button.css"

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{ ...props?.style, width: props?.width }}
      className={props?.className}
    >
      {props?.label}
    </button>
  )
}
