import { useState } from 'react'
import edit from '@/assets/svgs/ellipsis-vertical-solid.svg'

export default function TableItem(
    {item:{id, title, cover, score, progress, type}}) {
    const [isHover, setIsHover] = useState(false)
    return (
        <tr 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="item" key={id}
        >
            <td className="table-img">
                { isHover && <>
                <div className="edit">
                    <img src={edit} alt="" />
                </div>
                <div className='pop-out'>
                    <img className="pop" src={cover} alt="" />
                    <div className="arrow-right"></div>
                </div> 
                </>}
                { !isHover && <img src={cover} alt="" />}
            </td>
            <td className="table-title">{title}</td>
            <td>{score}</td>
            <td>{progress}</td>
            <td>{type}</td>
        </tr>
    )
}