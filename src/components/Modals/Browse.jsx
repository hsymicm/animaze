// IMPORT ASSETS
import '@/assets/styles/Modal.css'
import '@/assets/styles/Style.css'
import '@/assets/styles/Browse.css'
import '@/assets/styles/Scrollbar.css'
import Plus from '@/assets/svgs/plus-solid.svg'

// IMPORT COMPONENTS
import SearchBox from '@/components/SearchBox'

// IMPORT MODULES
import { useState, useEffect } from 'react'
import REQUEST from '@/modules/REQUEST'

export default function Browse({ getData }) {
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        setIsLoaded(false)
        if(!query) {
            setData([])
            return
        }
        REQUEST(query)
            .then((res) => setData(res))
            .then(() => setIsLoaded(true))
            .catch((e) => console.log(e))
    }, [query])


    return (
        <div
        onClick={(e) => e.stopPropagation()}
        className='modal-box modal-padding text-white'
        >
            <div className="search-flex">
                <SearchBox
                    style={{borderRadius: '8px 0 0 8px'}}
                    placeholder="Search anime that you want to add"
                    search={(val) => setQuery(val)}
                    autoFocus={true}
                    withButton={true}
                />
            </div>
            {(query && !isLoaded) && <div className="search-result scroll-bar">
                    {[...Array(2).keys()].map((e) => (
                        <div className='search-item-skeleton' key={e}>
                            <div className='skeleton img-skeleton'></div>
                            <div className='skeleton title-skeleton'></div>
                        </div>
                    ))}
            </div>}
            {isLoaded && data.length > 0 && <div className="search-result scroll-bar">
                {data.map((res, id) => (!res.isAdult ?
                    <div 
                        onClick={() => getData(res)}
                        style={{marginRight : data.length > 3 ? '8px' : ''}} 
                        className="search-item" 
                        key={id}
                    >
                        <div className="item-title">
                            <div className='item-image'>
                                <img src={res.cover.url}/>
                            </div>
                            <p>{res.title.english ? res.title.english : res.title.romaji}</p>
                        </div>
                        <img src={Plus} width="18px"/>
                    </div> : null
                ))}
            </div>}
        </div>
    )
}