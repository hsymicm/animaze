import { useState } from 'react';
import '@/assets/styles/Lists.css';

export default function Lists({ setLists, lists, defaultVal, label }) {
  const [status, setStatus] = useState(defaultVal || lists[0]);
  return (
    <>
      <h4 className="title">{label}</h4>
      <ul className="list">
        {lists.map((val) => (
          <li
            key={val}
            className={status === val ? 'active' : ''}
            onClick={() => {
              setStatus(val);
              setLists(val);
            }}
          >
            {val}
          </li>
        ))}
      </ul>
    </>
  );
}
