/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
// CSS IMPORT
import '@/assets/styles/Style.css';
import '@/assets/styles/Watchlist.css';

// SVG IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faGrip, faFilter } from '@fortawesome/free-solid-svg-icons';

// COMPONENT IMPORT
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TableShow from '@/components/TableShow';
import GridShow from '@/components/GridShow';
import Modal from '@/components/Modals/Modal';
import Empty from '@/components/Empty';
import SearchBox from '@/components/SearchBox';
import Aside from '@/components/Aside';
import { useAuth } from '@/contexts/AuthContext';
import { useMobile } from '@/contexts/MobileContext';
import { listenWatchList } from '@/modules/SHOWS_STORE';

// MODULE IMPORT
import {
  filterBySearch,
  filterByStatus,
  filterByType,
  filterByGenre,
  sortBy,
  reverseObj,
} from '@/modules/FILTER_BY';
import Shows from '@/assets/data/Shows';
import Order from '@/assets/data/Order';
import FilterModal from '@/components/Modals/FilterModal';

export default function Watchlist() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isList, setIsList] = useState(true);

  const [objUpdate, setObjUpdate] = useState(null);

  const [shows, setShows] = useState({});
  const [filtered, setFiltered] = useState({});
  const [FILTER, SET_FILTER] = useState({
    query: '',
    status: 'All',
    type: null,
    genre: null,
    sort_by: null,
    asc: true,
  });

  const { currentUser } = useAuth();
  const { isMobile, isTablet } = useMobile();

  const handleEdit = (status, id, obj) => {
    setObjUpdate({
      status,
      id,
      obj,
    });
    setIsOpen(true);
  };

  const filterShows = (obj, filter) => {
    if (!obj || Object.keys(obj).length === 0) {
      return obj;
    }

    let result = {
      Watching: [...obj.Watching],
      Completed: [...obj.Completed],
      Planning: [...obj.Planning],
    };

    const { status, type, genre, query, sort_by, asc } = filter;

    if (status !== 'All') {
      result = filterByStatus(result, status);
    }

    if (type) {
      result = filterByType(result, type);
    }

    if (genre) {
      result = filterByGenre(result, genre);
    }

    if (sort_by) {
      result = sortBy(result, sort_by);
    }

    if (!asc) {
      result = reverseObj(result, !asc);
    }

    if (query) {
      result = filterBySearch(result, query, true);
    }

    return result;
  };

  // LISTEN QUERY
  useEffect(() => {
    const unsubscribe = listenWatchList(currentUser, setShows);
    return unsubscribe;
  }, [currentUser]);

  // ON FILTER CHANGE
  useEffect(() => {
    setFiltered(filterShows(shows, FILTER));
  }, [FILTER, shows]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Modal
            objUpdate={objUpdate}
            id={objUpdate.id}
            handleClose={() => setIsOpen(false)}
          />
        )}
        {filterOpen && (
          <FilterModal
            SET_FILTER={SET_FILTER}
            FILTER={FILTER}
            obj={{ Shows, Order }}
            handleClose={() => setFilterOpen(false)}
          />
        )}
      </AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glb-container split-container text-white"
      >
        {!(isMobile || isTablet) && (
          <div id="aside" className="aside">
            <SearchBox
              placeholder="Filter"
              search={(val) => SET_FILTER({ ...FILTER, query: val })}
              defaultVal={FILTER.query}
              liveSearch
            />
            <Aside
              SET_FILTER={SET_FILTER}
              FILTER={FILTER}
              obj={{ Shows, Order }}
            />
          </div>
        )}
        <div id="content" className="content">
          <div className="quickaccess">
            {(isMobile || isTablet) && (
              <div className="filter-mode">
                <SearchBox
                  placeholder="Filter"
                  search={(val) => SET_FILTER({ ...FILTER, query: val })}
                  defaultVal={FILTER.query}
                  liveSearch
                  style={{ borderRadius: '8px 0 0 8px' }}
                />
                <div
                  data-tooltip-id="tooltip"
                  data-tooltip-content="Filter Options"
                  onClick={() => setFilterOpen(true)}
                  style={{ borderLeft: '2px solid #11171b' }}
                  className="view"
                >
                  <FontAwesomeIcon icon={faFilter} size="lg" />
                </div>
              </div>
            )}
            <div className="view-mode">
              <div
                data-tooltip-id="tooltip"
                data-tooltip-content="Table View"
                onClick={() => setIsList(true)}
                className={isList ? 'view view-active' : 'view'}
              >
                <FontAwesomeIcon icon={faList} size="lg" fixedWidth />
              </div>
              <div
                data-tooltip-id="tooltip"
                data-tooltip-content="Grid View"
                onClick={() => setIsList(false)}
                className={!isList ? 'view view-active' : 'view'}
              >
                <FontAwesomeIcon icon={faGrip} size="xl" fixedWidth />
              </div>
            </div>
          </div>
          <AnimatePresence>
            {Object.keys(filtered).length === 0 && currentUser && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="watchlist-skeleton"
              >
                <div className="status-skeleton skeleton-bg" />
                <table className="skeleton-bg">
                  <thead>
                    <tr>
                      <th width={84} />
                      <th>
                        <div className="title-skeleton skeleton-fg" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="cover-skeleton skeleton-fg" />
                      </td>
                      <td>
                        <div className="show-skeleton skeleton-fg" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cover-skeleton skeleton-fg" />
                      </td>
                      <td>
                        <div className="show-skeleton skeleton-fg" />
                      </td>
                    </tr>
                    <tr key="skeleton">
                      <td>
                        <div className="cover-skeleton skeleton-fg" />
                      </td>
                      <td>
                        <div className="show-skeleton skeleton-fg" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}
            {Object.keys(filtered).length !== 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {Object.entries(filtered).map(([key, value]) =>
                  value.length !== 0 ? (
                    <div key={key} className="table-container">
                      {!isList && (
                        <GridShow
                          status={key}
                          shows={value}
                          handleEdit={(status, index, obj) => {
                            handleEdit(status, index, obj);
                          }}
                        />
                      )}
                      {isList && (
                        <TableShow
                          status={key}
                          shows={value}
                          windowSize={{ isMobile, isTablet }}
                          handleEdit={(status, id, obj) => {
                            handleEdit(status, id, obj);
                          }}
                        />
                      )}
                    </div>
                  ) : null
                )}
                {Object.keys(filtered).every(
                  (key) => filtered[key].length === 0
                ) && <Empty />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.main>
    </>
  );
}
