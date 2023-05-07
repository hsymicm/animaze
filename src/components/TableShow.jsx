/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import TableItem from '@/components/TableItem';
import '@/assets/styles/Table.css';
import handleExpand from '@/modules/EXTRAS';

export default function TableShow({ status, shows, handleEdit, windowSize }) {
  const [expand, setExpand] = useState(false);

  const limit = 5;

  return (
    <>
      <h3>{status}</h3>
      <table className="table-show">
        <thead>
          <tr>
            <th />
            <th className="table-title">Title</th>
            {!windowSize.isMobile && (
              <>
                <th className="table-detail">Score</th>
                <th className="table-detail">Progress</th>
                <th className="table-detail">Type</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {handleExpand(shows, limit, expand).map(([key, item]) => (
            <TableItem
              key={key}
              id={item.id}
              handleEdit={handleEdit}
              status={status}
              item={item}
              windowSize={windowSize}
            />
          ))}
          {shows.length > limit + 2 && (
            <tr onClick={() => setExpand(!expand)}>
              <td className="expand item" colSpan={5}>
                {expand ? 'Show Less' : 'Show More'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
