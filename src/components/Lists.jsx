import {useState} from 'react'
import '@/assets/styles/Lists.css'

export default function Lists({setLists, showStatus}) {
    const [status, setStatus] = useState('All')
    showStatus.unshift('All')
    return (
        <>
        <h4 className='title'>Status</h4>
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