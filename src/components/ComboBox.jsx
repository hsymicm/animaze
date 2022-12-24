import '@/assets/styles/ComboBox.css'
import '@/assets/styles/Style.css'
import '@/assets/styles/Scrollbar.css'

import arrow from '@/assets/svgs/angle-down-solid.svg'
import xmark from '@/assets/svgs/xmark-solid.svg'

import { useState, useEffect, useRef } from 'react'

export default function ComboBox({filter, options, width, getSelected, defaultVal}) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(defaultVal ? defaultVal : null)
    const inputRef = useRef(null)

    const handler = (e) => {
        if(inputRef.current && !inputRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', handler, true)
        return () => {
            window.removeEventListener('click', handler, true)
        }
    })

    const handleInput = () => {
        setIsOpen(!isOpen)
    }

    const getLabel = () => {
        if(selected) return selected
        return filter
    }

    const onOptionClick = (option) => {
        setSelected(option)
        getSelected(option)
    }

    const isSelected = (option) => {
        if(!selected) return false
        return selected === option
    }

    const unSelect = () => {
        if(selected) {
            setSelected(null)
            getSelected(null)
        }
    }

    return (
        <div
        style={{width : width}}
        className={`combo-box ${selected ? 'option-selected' : ''}`}
        onClick={selected ? unSelect : handleInput} 
        >
            {getLabel()}
            {selected && <img style={{width: '12px', margin : '0 2px'}} src={xmark}/>}
            {!selected && <img style={{transform: isOpen ?  'rotate(-180deg)' : ''}} src={arrow}/>}
            {isOpen && 
            <div ref={inputRef} className="combo">
                <div className="arrow-top"></div>
                <div className='overflow-box'>
                    <ul className='scroll-bar'>
                        {options.map((option, key) => (
                            <li 
                                style={{marginRight : options.length > 4 ? '8px' : ''}}
                                className={isSelected(option) ? 'active' : ''} 
                                onClick={() => onOptionClick(option)} 
                                key={key}>{option}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}
        </div>
    )
}