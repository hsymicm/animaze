import '@/assets/styles/SearchBox.css';
import '@/assets/styles/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import Button from '@/components/Button';

export default function SearchBox({
  search,
  placeholder,
  defaultVal,
  autoFocus,
  style,
  liveSearch,
  withButton,
}) {
  const [value, setValue] = useState(defaultVal || '');

  const handlePress = (e) => {
    if (e.key === 'Enter') {
      search(value);
      setValue('');
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    if (liveSearch) search(val);
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={style} className="search-box">
        {!value.length > 0 && (
          <FontAwesomeIcon icon={faMagnifyingGlass} width={18} />
        )}
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          value={value}
          onChange={handleChange}
          onKeyPress={handlePress}
          type="text"
          style={{ paddingRight: value.length > 0 ? '26px' : 0 }}
          placeholder={placeholder}
        />
        {value.length > 0 && (
          <div
            data-tooltip-id="clear-search"
            data-tooltip-content="Clear Current Search"
            className="clear"
            onClick={() => {
              setValue('');
              search('');
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        )}
        <Tooltip id="clear-search" className="tooltip" />
      </div>
      {withButton && (
        <Button
          onClick={() => {
            search(value);
            setValue('');
          }}
          style={{ borderRadius: '0 8px 8px 0' }}
          label="Search"
          width="140px"
          className="btn btn-primary"
        />
      )}
    </div>
  );
}
