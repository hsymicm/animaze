import '@/assets/styles/Button.css'

export default function Button(props) {
    return (
        <button style={{width : props?.width}} className={ props?.className }>
            { props?.label }
        </button>
    )
}