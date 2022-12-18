import {useState} from 'react'
import '@/assets/styles/Lists.css'
import Data from '@/assets/data/Data'

export default function Lists({setLists, setShows, showStatus}) {
    const [status, setStatus] = useState('All')
    showStatus.unshift('All')
    return (
        <>
        <h4 className='title'>Lists</h4>
        <ul className='list'>
            {showStatus.map((val, id) => (
                <li 
                key={id} 
                className={status === val ? 'active' : ''} 
                onClick={() => {
                    setStatus(val)
                    setLists(val)
                }}>
                    {val}
                </li>
            ))}
        </ul>
        </>
    )
}