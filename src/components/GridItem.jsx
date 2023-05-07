import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen as editIcon } from '@fortawesome/free-solid-svg-icons';
import getColor from '@/modules/HEX_CONVERT';
import { truncate } from '@/modules/STRING_PROCESS';
import '@/assets/styles/Grid.css';

export default function GridItem({ id, item, status, handleEdit }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => handleEdit(status, id, item)}
      className="card"
      style={{
        boxShadow: isHover
          ? `0 4px 16px ${getColor(item.cover.color, 0.2)}`
          : '',
        backgroundColor: getColor(item.cover.color, 1, 0.25, 0.25),
        border: `2px solid ${
          isHover ? getColor(item.cover.color, 0.5) : '#1c242b'
        }`,
      }}
      key={id}
    >
      <div
        data-tooltip-id="tooltip"
        data-tooltip-content="Edit Show"
        onClick={() => handleEdit(status, id, item)}
        className="edit"
        style={{
          backgroundColor: getColor(item.cover.color, 1, 0.15, 0.75),
          opacity: isHover ? 1 : 0,
        }}
      >
        <FontAwesomeIcon
          style={{ paddingLeft: '1px', paddingBottom: '1px' }}
          icon={editIcon}
          fixedWidth
        />
      </div>
      <div className="info">
        <div>
          {truncate(
            item.title.english ? item.title.english : item.title.romaji,
            40
          )}
        </div>
        <div className="details">
          <div>
            {item.progress
              ? `EP ${item.progress}${item.episodes ? `/${item.episodes}` : ''}`
              : ''}
          </div>
          <div>{item.score}</div>
        </div>
      </div>
      <div className="cover">
        <LazyLoadImage src={item.cover?.url} />
      </div>
    </div>
  );
}
