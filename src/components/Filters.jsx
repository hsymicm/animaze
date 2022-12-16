import ComboBox from '@/components/ComboBox'
import '@/assets/styles/Filters.css'

export default function Filters({text, filter}) {
    return (
        <>
        <h4 className='title'>{text}</h4>
        {filter.map((item) => <div className='filter'><ComboBox className="filter" filter={item.filter} options={item.option}/></div>)}
        </>
    )
}