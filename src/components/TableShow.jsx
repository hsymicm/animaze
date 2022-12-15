import TableItem from '@/components/TableItem'
import '@/assets/styles/Table.css'

export default function TableShow({ title, shows }) {
    return (
        <>
            <h3>{title}</h3>
            <table className='table-show'>
                <thead>
                    <tr>
                        <th></th>
                        <th className='table-title'>Title</th>
                        <th className='table-detail'>Score</th>
                        <th className='table-detail'>Progress</th>
                        <th className='table-detail'>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {shows.map((item) => <TableItem key={item.id} item={item} />)}
                </tbody>
            </table>
        </>
    )
}