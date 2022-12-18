import ComboBox from '@/components/ComboBox'
import '@/assets/styles/Filters.css'
import Format from '@/assets/data/Format'
import Genre from '@/assets/data/Genre'

export default function Filters() {
    const filter = {
        Format : Format,
        Genre : Genre,
    }
    return (
        <>
        <h4 className='title'>Filters</h4>
        {Object.entries(filter).map(([key, value]) => <div key={key} className='filter'><ComboBox className="filter" filter={key} options={value}/></div>)}
        </>
    )
}