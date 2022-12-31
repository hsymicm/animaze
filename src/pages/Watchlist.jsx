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
import Modal from '@/components/Modals/Modal'

// MODULE IMPORT
import { useState, useEffect } from 'react'
import { filterBySearch, filterByStatus, filterByType, filterByGenre } from '@/modules/FILTER_BY'
import { getWatchlist, template } from '@/modules/SHOWS'

export default function Watchlist() {
    const [isList, setIsList] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [objUpdate, setObjUpdate] = useState(null)
    const [shows, setShows] = useState(getWatchlist())
    const [FILTER, SET_FILTER] = useState({
        query : '',
        status : 'All',
        type : '',
        genre : '',
    })

    const handleEdit = (status, index, obj) => {
        setObjUpdate({
            status : status,
            index : index,
            obj : obj,
        })
        setIsOpen(true)
    }

    const handleShows = () => {
        let result = getWatchlist()
        result = filterByStatus(result, FILTER.status)
        result = filterByType(result, FILTER.type)
        result = filterByGenre(result, FILTER.genre)
        result = filterBySearch(result, FILTER.query)
        return result
    }

    // ON MOUNTED
    useEffect(() => {
        const handler = () => {
            setShows(handleShows)
        }
        window.addEventListener("storage", handler)
        return () => {
            window.removeEventListener("storage", handler)
        }
    })

    // ON FILTER CHANGE
    useEffect(() => {
        setShows(handleShows)
    }, [FILTER])

    return (
        <>
        {isOpen && <Modal
            objUpdate={objUpdate}
            index={objUpdate.index}
            scrollPos={window.scrollY}
            handleClose={() => setIsOpen(false)}
        />}
        <main className='glb-container split-container text-white'>
            <div id='aside' className='aside'>
                <SearchBox 
                    placeholder='Filter'
                    search={(val) => SET_FILTER({...FILTER, 'query' : val})}
                    liveSearch={true}
                />
                <Lists
                    setLists={(val) => SET_FILTER({...FILTER, 'status' : val})}
                    setShows={setShows}
                    showStatus={Object.keys(template)}
                />
                <Filters
                    setFilters={(key, val) => SET_FILTER({...FILTER, [key] : val})}
                />
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
                { // GRID VIEW
                !isList && Object.entries(shows).map(([key, value]) => (
                    value.length !== 0 ? <div key={key} className='table-container'>
                        <GridShow
                            status={key}
                            shows={value}
                            handleEdit={(status, index, obj) => {
                                handleEdit(status, index, obj)
                            }}
                        />
                    </div> : null
                ))}
                { // LIST VIEW
                isList && Object.entries(shows).map(([key, value]) => (
                    value.length !== 0 ? <div key={key} className='table-container'>
                        <TableShow
                            status={key}
                            shows={value}
                            handleEdit={(status, index, obj) => {
                                handleEdit(status, index, obj)
                            }}/>
                    </div> : null
                ))}
            </div>
        </main>
        </>
    )
}