import '@/assets/styles/Modal.css'

export default function Backdrop({ children, onClick }) {
    return (
        <div 
            onClick={onClick}
            className='backdrop'
        >
            {children}
        </div>
    )
}