import ComboBox from '@/components/ComboBox'
import '@/assets/styles/Filters.css'
import Type from '@/assets/data/Type'
import Genre from '@/assets/data/Genre'

export default function Filters({setFilters}) {
    const filterOptions = {
        Type : Type,
        Genre : Genre,
    }
    return (
        <>
        <h4 className='title'>Filters</h4>
        {Object.entries(filterOptions).map(([key, value]) => <div key={key} className='filter'>
            <ComboBox
                className="filter"
                filter={key}
                options={value}
                getSelected={(val) => setFilters(key.toLowerCase(),val)}
            />
        </div>)}
        </>
    )
}