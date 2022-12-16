import { useState } from 'react'
import edit from '@/assets/svgs/ellipsis-vertical-solid.svg'
import '@/assets/styles/Grid.css'

export default function GridItem(
    {item: {id, title, cover, score, progress, type}}) {
    const [isHover, setIsHover] = useState(false)
    return (
        <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="card"
        key={id}
        >
            {isHover && <div className="edit">
                <img src={edit} alt="" />
            </div>}
            <div className="info">
                <div>{title}</div>
                <div className="details">
                    <div>{progress}</div>
                    <div>{score}</div>
                </div>
            </div>
            <div className="cover">
                <img src={cover} alt="" />
            </div>
        </div>
    )
}
