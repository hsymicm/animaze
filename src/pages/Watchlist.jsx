// CSS IMPORT
import '@/assets/styles/Style.css'
import '@/assets/styles/Watchlist.css'

// SVG IMPORT
import grid from '@/assets/svgs/grip-solid.svg'
import list from '@/assets/svgs/list-solid.svg'

// COMPONENT IMPORT
import TableShow from '@/components/TableShow'
import GridShow from '@/components/GridShow'
import SearchBox from '@/components/SearchBox'
import Filters from '@/components/Filters'
import Lists from '@/components/Lists'

// DATA IMPORT
import Data from '@/assets/data/Data'

// MODULE IMPORT
import { useState, useEffect } from 'react'
import { filterBySearch, filterByStatus } from '@/modules/FILTER_BY'

export default function Watchlist() {
    const showStatus = Object.keys(Data)

    const [isList, setIsList] = useState(true)
    const [shows, setShows] = useState(Data)
    
    const [FILTER, SET_FILTER] = useState({
        query : '',
        status : 'All',
        format : '',
        genre : '',
    })

    useEffect(() => {
        let result = Data
        result = filterByStatus(result, FILTER.status)
        result = filterBySearch(result, FILTER.query)
        setShows(result)
    }, [FILTER])

    return (
        <main className='glb-container split-container text-white'>
            <div id='aside' className='aside'>
                <SearchBox 
                searchShows={(val) => SET_FILTER({...FILTER, 'query' : val})}
                />
                <Lists
                setLists={(val) => SET_FILTER({...FILTER, 'status' : val})}
                setShows={setShows}
                showStatus={showStatus}
                />
                <Filters/>
            </div>
            <div id='content' className='content'>
                <div className='view-mode'>
                    <div
                    onClick={() => setIsList(true)}
                    className={isList ? 'view active' : 'view'}
                    >
                        <img src={list} width={'20px'} alt="" />
                    </div>
                    <div
                    onClick={() => setIsList(false)}
                    className={!isList ? 'view active' : 'view'}
                    >
                        <img src={grid} width={'20px'} alt="" />
                    </div>
                </div>
                {!isList && Object.keys(shows).map(key => (
                    shows[key].length !== 0 ? <div key={key} className='table-container'>
                        <GridShow title={key} shows={shows[key]} />
                    </div> : undefined
                ))}
                {isList && Object.keys(shows).map(key => (
                    shows[key].length !== 0 ? <div key={key} className='table-container'>
                        <TableShow title={key} shows={shows[key]} />
                    </div> : undefined
                ))}
            </div>
        </main>
    )
}