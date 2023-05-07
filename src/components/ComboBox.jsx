import '@/assets/styles/ComboBox.css';
import '@/assets/styles/Style.css';
import '@/assets/styles/Scrollbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComboBox({ filter, options, getSelected, defaultVal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultVal || null);
  const inputRef = useRef();

  const handler = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handler, true);
    return () => {
      window.removeEventListener('click', handler, true);
    };
  });

  const handleInput = () => {
    setIsOpen(!isOpen);
  };

  const getLabel = () => {
    if (selected) return selected;
    return filter;
  };

  const onOptionClick = (option) => {
    setSelected(option);
    getSelected(option);
  };

  const isSelected = (option) => {
    if (!selected) return false;
    return selected === option;
  };

  const unSelect = () => {
    if (selected) {
      setSelected(null);
      getSelected(null);
    }
  };

  return (
    <div
      className={`combo-box ${selected ? 'option-selected' : ''}`}
      onClick={handleInput}
      ref={inputRef}
    >
      {getLabel()}
      {!selected && (
        <FontAwesomeIcon
          style={{
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(-180deg)' : '',
          }}
          icon={faChevronDown}
          size="sm"
        />
      )}
      {selected && (
        <div
          className="clear"
          onClick={(e) => {
            e.stopPropagation();
            unSelect();
            setIsOpen(false);
          }}
          data-tooltip-id="tooltip"
          data-tooltip-content="Clear Current Choice"
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, translateY: -16, opacity: 0 }}
            animate={{ scale: 1, translateY: 0, opacity: 1 }}
            exit={{ scale: 0.8, translateY: -16, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.25, ease: 'easeInOut' }}
            className="combo"
          >
            <div className="arrow-top" />
            <div className="overflow-box">
              <ul className="scroll-bar">
                {options.map((option) => (
                  <li
                    style={{ marginRight: options.length > 4 ? '8px' : '' }}
                    className={isSelected(option) ? 'active' : ''}
                    onClick={() => onOptionClick(option)}
                    key={option}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
