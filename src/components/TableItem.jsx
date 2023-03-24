import edit from '@/assets/svgs/ellipsis-vertical-solid.svg'
import '@/assets/styles/Table.css'
import { getColor } from '@/modules/HEX_CONVERT'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function TableItem({ id, item, status, handleEdit, windowWidth }) {
    const [isHover, setIsHover] = useState(false)
    return (
        <tr
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => handleEdit(status, id, item)}
            className="item"
            key={id}
        >
            <td className="table-img">
                {isHover && 
                <div className='pop-out'>
                    <img
                        style={{
                            boxShadow : `0 4px 16px ${getColor(item.cover.color, 0.2)}`,
                            backgroundColor : getColor(item.cover.color, 0.25)
                        }}
                        src={item.cover?.url}
                    />
                    <div className="arrow-right"></div>
                </div>}
                <div
                    onClick={() => handleEdit(status, id, item)}
                    className={isHover ? "edit" : "cover"}
                >
                    <LazyLoadImage
                    style={{
                        backgroundColor : !isHover ? getColor(item.cover.color, 0.25) : null
                    }}
                    src={isHover ? edit : item.cover?.url} 
                    width={48}
                    height={48}
                    alt="" />
                </div>
            </td>
            <td className="table-title">
                {item.title.english ? item.title.english : item.title.romaji}
                { windowWidth <= 640 && 
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '8px'
                }}
                >
                <div>{item.progress ? `EP ${item.progress} ${item.episodes ? '/' + item.episodes : ''}` : undefined}</div>
                <div>{item.score}</div>
                </div>
                }
            </td>
            { windowWidth > 640 &&
            <>
            <td>{item.score}</td>
            <td>{item.progress ?`${item.progress} ${item.episodes ? '/' + item.episodes : ''}` : undefined}</td>
            <td>{item.type}</td>
            </>
            }
            
        </tr>
    )
}