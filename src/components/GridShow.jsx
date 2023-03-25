import GridItem from '@/components/GridItem'
import '@/assets/styles/Grid.css'
import Button from '@/components/Button'
import { debounce, handleExpand } from '@/modules/EXTRAS'
import { useState, useEffect } from 'react'

export default function GridShow({ status, shows, handleEdit}) {
    const [expand, setExpand] = useState(false)

    const limit = 5
    
    const getColumns = () => {
        return Math.floor(document.getElementById("content").clientWidth / 180)
    }

    const [columns, setColums] = useState(getColumns)

    useEffect(() => { 
        const updateColums = debounce(function handleUpdate() {
            setColums(getColumns())
        }, 10)
        window.addEventListener("resize", updateColums)
        return () => 
            window.removeEventListener("resize", updateColums)
    }, [])
    
    return (
        <>
        <h3>{status}</h3>
        <div
            style={{gridTemplateColumns : `repeat(${columns}, 1fr)`}}
            className="grid-show"
        >
            {handleExpand(shows, limit, expand).map(([key, item]) => <GridItem 
                key={key} 
                id={key}
                handleEdit={handleEdit}
                status={status}
                item={item} 
            />)}
        </div>
        {shows.length > limit + 2 && 
        <Button
            onClick={() => setExpand(!expand)}
            style={{
                marginBottom : '24px'
            }}
            width="100%"
            className="btn btn-secondary btn-expand"
            label={expand ? 'Show Less' : 'Show More'}
        />}
        </>
    )
}