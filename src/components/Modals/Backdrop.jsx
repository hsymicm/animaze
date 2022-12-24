import '@/assets/styles/Modal.css'

export default function Backdrop({ children, onClick, scrollPos }) {
    return (
        <div 
            onClick={onClick}
            style={{top: `${scrollPos}px`}}
            className='backdrop'
        >
            {children}
        </div>
    )
}