import GridItem from '@/components/GridItem'
import '@/assets/styles/Grid.css'

export default function GridShow({ status, shows, handleEdit}) {
    return (
        <>
        <h3>{status}</h3>
        <div className="grid-show">
            {Object.entries(shows).map(([key, item]) => <GridItem 
                key={key} 
                id={key}
                handleEdit={handleEdit}
                status={status}
                item={item} 
            />)}
        </div>
        </>
    )
}