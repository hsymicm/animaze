import TableItem from "@/components/TableItem"
import "@/assets/styles/Table.css"
import { useState } from "react"
import { handleExpand } from "@/modules/EXTRAS"

export default function TableShow({ status, shows, handleEdit, windowWidth }) {
  const [expand, setExpand] = useState(false)

  const limit = 5

  return (
    <>
      <h3>{status}</h3>
      <table className="table-show">
        <thead>
          <tr>
            <th></th>
            <th className="table-title">Title</th>
            {windowWidth > 640 && (
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
              windowWidth={windowWidth}
            />
          ))}
          {shows.length > limit + 2 && (
            <tr onClick={() => setExpand(!expand)}>
              <td className="expand item" colSpan={5}>
                {expand ? "Show Less" : "Show More"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}
