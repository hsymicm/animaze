import search from '@/assets/svgs/magnifying-glass-solid.svg'
import '@/assets/styles/SearchBox.css'
import '@/assets/styles/Style.css'

export default function SearchBox({text}) {
    return (
        <div className='search-box'>
            <img src={search} />
            <input type="text" placeholder={text} className="search-box" />
        </div>
    )
}