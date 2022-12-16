import '@/assets/styles/ComboBox.css'
import arrow from '@/assets/svgs/angle-down-solid.svg'
import { useState } from 'react'

export default function ComboBox({filter, options}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
        onClick={() => setIsOpen(!isOpen)} 
        className="combo-box"
        >
            {filter}
            <img style={{transform: isOpen ?  'rotate(-180deg)' : ''}} src={arrow}/>
            {isOpen && 
            <div className="combo">
                <div className="arrow-top"></div>
                <ul>
                    {options.map((option, key) => (
                        <li key={key}>{option}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}