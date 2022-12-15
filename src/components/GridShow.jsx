import GridItem from '@/components/GridItem'
import '@/assets/styles/Grid.css'

export default function GridShow({title, shows}) {
    return (
        <>
        <h3>{title}</h3>
        <div className="grid-show">
            {shows.map((item) => <GridItem key={item.id} item={item} />)}
        </div>
        </>
    )
}