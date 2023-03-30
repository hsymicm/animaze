import { useState } from "react"
import { getColor } from "@/modules/HEX_CONVERT"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen as editIcon } from "@fortawesome/free-solid-svg-icons"
import "@/assets/styles/Grid.css"

export default function GridItem({ id, item, status, handleEdit }) {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleEdit(status, id, item)}
      className="card"
      style={{
        boxShadow: isHover
          ? `0 4px 16px ${getColor(item.cover.color, 0.2)}`
          : "",
        backgroundColor: getColor(item.cover.color, 0.25),
        border: `2px solid ${
          isHover ? getColor(item.cover.color, 0.5) : "#1c242b"
        }`,
      }}
      key={id}
    >
      <div
        onClick={() => handleEdit(status, id, item)}
        className="edit"
        style={{
          backgroundColor: getColor(item.cover.color, 1, 0.15, 0.75),
          opacity: isHover ? 1 : 0,
        }}
      >
        <FontAwesomeIcon
          style={{ paddingLeft: "1px", paddingBottom: "1px" }}
          icon={editIcon}
          fixedWidth
        />
      </div>
      <div className="info">
        <div>{item.title.english ? item.title.english : item.title.romaji}</div>
        <div className="details">
          <div>
            {item.progress
              ? `EP ${item.progress}${item.episodes ? "/" + item.episodes : ""}`
              : ""}
          </div>
          <div>{item.score}</div>
        </div>
      </div>
      <div className="cover">
        <LazyLoadImage src={item.cover?.url} alt="" />
      </div>
    </div>
  )
}
