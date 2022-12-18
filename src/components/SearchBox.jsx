import search from '@/assets/svgs/magnifying-glass-solid.svg'
import '@/assets/styles/SearchBox.css'
import '@/assets/styles/Style.css'
import { useState } from 'react'


export default function SearchBox({searchShows}) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        const val = e.target.value
        setValue(val)
        searchShows(val)
    }
    return (
        <div className='search-box'>
            <img src={search} />
            <input value={value} onChange={handleChange} type="text" placeholder="Filter" className="search-box" />
        </div>
    )
}