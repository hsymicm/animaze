// IMPORT ASSETS
import '@/assets/styles/Modal.css';
import '@/assets/styles/Style.css';
import '@/assets/styles/Browse.css';
import '@/assets/styles/Scrollbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// IMPORT COMPONENTS
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SearchBox from '@/components/SearchBox';
import Empty from '@/components/Empty';

// IMPORT MODULES
import REQUEST from '@/modules/REQUEST';
import getColor from '@/modules/HEX_CONVERT';

export default function Browse({ getData }) {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    if (!query) {
      setData([]);
      return;
    }
    REQUEST(query)
      .then((res) => setData(res))
      .then(() => setIsLoaded(true))
      .catch((e) => console.log(e));
  }, [query]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      onClick={(e) => e.stopPropagation()}
      className="modal-box modal-padding text-white"
    >
      <div className="search-flex">
        <SearchBox
          placeholder="Search anime"
          search={(val) => setQuery(val)}
          autoFocus
          withButton
        />
      </div>
      {query && !isLoaded && (
        <div className="search-result scroll-bar">
          {[...Array(2).keys()].map((e) => (
            <div className="search-item-skeleton" key={e}>
              <div className="skeleton img-skeleton" />
              <div className="skeleton title-skeleton" />
            </div>
          ))}
        </div>
      )}
      {isLoaded && data.length > 0 && (
        <div className="search-result scroll-bar">
          {data.map((res) =>
            !res.isAdult ? (
              <div
                onClick={() => getData(res)}
                style={{ marginRight: data.length > 3 ? '8px' : '' }}
                className="search-item"
                key={res.id}
              >
                <div className="item-title">
                  <div className="item-image">
                    <LazyLoadImage
                      style={{
                        backgroundColor: getColor(
                          res.cover.color,
                          1,
                          0.25,
                          0.25
                        ),
                      }}
                      src={res.cover.url}
                    />
                  </div>
                  <p>
                    {res.title.english ? res.title.english : res.title.romaji}
                  </p>
                </div>
                <div
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Choose Anime"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: '8px' }}
                    icon={faPlus}
                    size="lg"
                  />
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
      {isLoaded && !data.length && <Empty label="Can't find any results" />}
    </motion.div>
  );
}
