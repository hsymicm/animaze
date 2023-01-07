import { useState } from 'react'
import { getColor } from '@/modules/HEX_CONVERT'
import edit from '@/assets/svgs/ellipsis-vertical-solid.svg'
import '@/assets/styles/Grid.css'

export default function GridItem({ id, item, status, handleEdit }) {
    const [isHover, setIsHover] = useState(false)
    return (
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="card"
        style={{boxShadow: isHover ? `0 4px 16px ${getColor(item.cover.color, 0.2)}` : ''}}
        key={id}
        >
            {isHover && 
            <div 
                onClick={() => handleEdit(status, id, item)}
                className="edit"
            >
                <img src={edit} alt="" />
            </div>}
            <div className="info">
                <div>{item.title.english ? item.title.english : item.title.romaji}</div>
                <div className="details">
                    <div>{item.progress ?`EP ${item.progress} ${item.episodes ? '/' + item.episodes : ''}` : undefined}</div>
                    <div>{item.score}</div>
                </div>
            </div>
            <div className="cover">
                <img src={item.cover?.url} alt="" />
            </div>
        </div>
    )
}
