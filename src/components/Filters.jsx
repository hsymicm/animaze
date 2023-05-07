import ComboBox from '@/components/ComboBox';
import '@/assets/styles/Filters.css';
import Type from '@/assets/data/Type';
import Genre from '@/assets/data/Genre';
import { sortTypes } from '@/modules/FILTER_BY';

export default function Filters({ setFilters, FILTER }) {
  const filterOptions = {
    Type,
    Genre,
    'Sort by': sortTypes(),
  };
  return (
    <>
      <h4 className="title">Filters</h4>
      {Object.entries(filterOptions).map(([key, value]) => (
        <div key={key} className="filter">
          <ComboBox
            className="filter"
            filter={key}
            options={value}
            defaultVal={FILTER[key.toLowerCase().replace(' ', '_')]}
            getSelected={(val) =>
              setFilters(key.toLowerCase().replace(' ', '_'), val)
            }
          />
        </div>
      ))}
    </>
  );
}
