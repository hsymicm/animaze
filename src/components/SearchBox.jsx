import '@/assets/styles/SearchBox.css'
import '@/assets/styles/Style.css'
import magnifyingGlass from '@/assets/svgs/magnifying-glass-solid.svg'
import { useState } from 'react'
import Button from'@/components/Button'

function SearchBox({ search, placeholder, autoFocus, liveSearch, withButton }) {
    const [value, setValue] = useState('')

    const handlePress = (e) => {
        if(e.key === 'Enter') {
            search(value)
            setValue('')
        }
    }

    const handleChange = (e) => {
        const val = e.target.value
        setValue(val)
        if(liveSearch) search(val)
    }
    return (
        <div style={{display: 'flex', width: '100%'}}>
            <div style={{borderRadius: withButton ? '8px 0 0 8px' : ''}} className='search-box'>
                <img src={magnifyingGlass} />
                <input autoFocus={autoFocus} value={value} onChange={handleChange} onKeyPress={handlePress} type="text" placeholder={placeholder} className="search-box" />
            </div>
            {withButton && <Button
                onClick={() => {
                    search(value)
                    setValue('')
                }}
                style={{borderRadius: '0 8px 8px 0'}}
                label="Search"
                width="140px"
                className="btn btn-primary"
            />}
        </div>
    )
}

export default SearchBox