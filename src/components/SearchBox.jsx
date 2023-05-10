import '@/assets/styles/SearchBox.css';
import '@/assets/styles/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
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

  const searchRef = useRef(null);

  useEffect(() => {
    if (autoFocus) searchRef.current.focus();
  }, []);

  const handlePress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      search(value);
      setValue('');
      searchRef.current.blur();
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
          ref={searchRef}
          value={value}
          onChange={handleChange}
          onKeyPress={handlePress}
          type="search"
          style={{ paddingRight: value.length > 0 ? '30px' : 0 }}
          placeholder={placeholder}
        />
        {value.length > 0 && (
          <div
            data-tooltip-id="tooltip"
            data-tooltip-content="Clear Current Search"
            className="clear"
            onClick={() => {
              setValue('');
              search('');
              searchRef.current.blur();
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        )}
      </div>
      {withButton && (
        <Button
          onClick={() => {
            search(value);
            setValue('');
            searchRef.current.blur();
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
