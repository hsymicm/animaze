import TableItem from '@/components/TableItem'
import '@/assets/styles/Table.css'

export default function TableShow({ status, shows, handleEdit }) {
    return (
        <>
            <h3>{status}</h3>
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
                    {Object.entries(shows).map(([key, item]) => <TableItem 
                        key={key}
                        id={key}
                        handleEdit={handleEdit}
                        status={status} 
                        item={item} 
                    />)}
                </tbody>
            </table>
        </>
    )
}