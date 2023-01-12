import '@/assets/styles/Modal.css'

export default function Backdrop({ children, onClick, scrollPos, blur=true }) {
    return (
        <div 
            onClick={onClick}
            style={{zIndex : blur ? 999 : 101}}
            className={blur ? 'backdrop backdrop-bg' : 'backdrop'}
        >
            {children}
        </div>
    )
}