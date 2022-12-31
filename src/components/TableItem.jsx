import { useState } from 'react'
import edit from '@/assets/svgs/ellipsis-vertical-solid.svg'
import '@/assets/styles/Table.css'
import { getColor } from '@/modules/HEX_CONVERT'

export default function TableItem({ id, item, status, handleEdit }) {
    const [isHover, setIsHover] = useState(false)
    return (
        <tr
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="item"
            key={id}
        >
            <td className="table-img">
                {isHover && 
                <div className='pop-out'>
                    <img style={{
                            boxShadow : `0 4px 16px ${item.cover.color ? getColor(item.cover.color, 0.2) : 'rgba(255, 255, 255, 0.1)'}`
                        }}
                        src={item.cover?.url}
                    />
                    <div className="arrow-right"></div>
                </div>}
                <div
                    onClick={() => handleEdit(status, id, item)}
                    className={isHover ? "edit" : "cover"}
                >
                    <img src={isHover ? edit : item.cover?.url} alt="" />
                </div>
            </td>
            <td className="table-title">{item.title.english ? item.title.english : item.title.romaji}</td>
            <td>{item.score}</td>
            <td>{item.progress ?`${item.progress} ${item.episodes ? '/' + item.episodes : ''}` : undefined}</td>
            <td>{item.type}</td>
        </tr>
    )
}