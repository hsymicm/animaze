import { useState, useEffect } from 'react';
import handleExpand from '@/modules/EXTRAS';
import GridItem from '@/components/GridItem';
import '@/assets/styles/Grid.css';
import Button from '@/components/Button';

export default function GridShow({ status, shows, handleEdit }) {
  const [expand, setExpand] = useState(false);

  const getColumns = () => {
    const width = document.getElementById('content').clientWidth;
    const col = Math.floor(width / 164);
    return col > 1 ? col : 1;
  };

  const [columns, setColums] = useState(getColumns);

  const limit = columns * (columns < 2 ? 4 : 2);

  useEffect(() => {
    const updateColums = () => {
      setColums(getColumns());
    };
    window.addEventListener('resize', updateColums);
    return () => window.removeEventListener('resize', updateColums);
  }, []);

  return (
    <>
      <h3>{status}</h3>
      <div
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        className="grid-show"
      >
        {handleExpand(shows, limit, expand).map(([key, item]) => (
          <GridItem
            key={key}
            id={item.id}
            handleEdit={handleEdit}
            status={status}
            item={item}
          />
        ))}
      </div>
      {shows.length > limit + 2 && (
        <Button
          onClick={() => setExpand(!expand)}
          style={{
            marginTop: '-24px',
            marginBottom: '24px',
          }}
          width="100%"
          className="btn btn-secondary btn-expand"
          label={expand ? 'Show Less' : 'Show More'}
        />
      )}
    </>
  );
}
