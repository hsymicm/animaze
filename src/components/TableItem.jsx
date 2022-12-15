import { useState } from 'react'
import edit from '@/assets/svgs/ellipsis-vertical-solid.svg'
import '@/assets/styles/Table.css'

export default function TableItem(
    { item: { id, title, cover, score, progress, type } }) {
    const [isHover, setIsHover] = useState(false)
    return (
        <tr
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="item" key={id}
        >
            <td className="table-img">
                {isHover && 
                <div className='pop-out'>
                    <img className="pop" src={cover} alt="" />
                    <div className="arrow-right"></div>
                </div>}
                <div className={isHover ? "edit" : "cover"}>
                    <img src={isHover ? edit : cover} alt="" />
                </div>
            </td>
            <td className="table-title">{title}</td>
            <td>{score}</td>
            <td>{progress}</td>
            <td>{type}</td>
        </tr>
    )
}