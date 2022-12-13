import '@/assets/styles/Button.css'

export default function Button(props) {
    return (
        <button className={ props.className }>
            { props.label }
        </button>
    )
}