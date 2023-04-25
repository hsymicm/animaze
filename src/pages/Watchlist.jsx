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
import { Tooltip } from 'react-tooltip';
import TableShow from '@/components/TableShow';
import GridShow from '@/components/GridShow';
import Modal from '@/components/Modals/Modal';
import Empty from '@/components/Empty';
import SearchBox from '@/components/SearchBox';
import Aside from '@/components/Aside';
import { useAuth } from '@/contexts/AuthContext';
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
import { template } from '@/modules/SHOWS';
import Order from '@/assets/data/Order';
import FilterModal from '@/components/Modals/FilterModal';

export default function Watchlist() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isList, setIsList] = useState(true);

  const [objUpdate, setObjUpdate] = useState(null);

  const [width, setWindowWidth] = useState(window.innerWidth);

  const [shows, setShows] = useState({});
  const [filtered, setFiltered] = useState({});
  const [loading, setLoading] = useState(true);
  const [FILTER, SET_FILTER] = useState({
    query: '',
    status: 'All',
    type: '',
    genre: '',
    sort_by: '',
    asc: true,
  });

  const { currentUser } = useAuth();

  const handleEdit = (status, id, obj) => {
    setObjUpdate({
      status,
      id,
      obj,
    });
    setIsOpen(true);
  };

  const filterShows = (obj, callback) => {
    let result = { ...obj };
    result = filterByStatus(result, FILTER.status);
    result = filterByType(result, FILTER.type);
    result = filterByGenre(result, FILTER.genre);
    result = filterBySearch(result, FILTER.query, true);
    result = sortBy(result, FILTER.sort_by);
    result = reverseObj(result, !FILTER.asc);
    callback(result);
  };

  const updateDimensions = () => {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);
  };

  // ON WINDOW RESIZE
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // LISTEN QUERY
  useEffect(() => {
    let unsubscribe;
    if (currentUser) {
      unsubscribe = listenWatchList(
        currentUser,
        setShows,
        setFiltered,
        setLoading
      );
    } else {
      unsubscribe = setLoading(false);
    }

    return unsubscribe;
  }, [currentUser]);

  // ON FILTER CHANGE
  useEffect(() => {
    filterShows(shows, setFiltered);
  }, [FILTER]);

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
            obj={{ template, Order }}
            handleClose={() => setFilterOpen(false)}
          />
        )}
      </AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glb-container split-container text-white"
      >
        {width > 960 && (
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
              obj={{ template, Order }}
            />
          </div>
        )}
        <div id="content" className="content">
          <div className="quickaccess">
            {width <= 960 && (
              <>
                <div className="filter-mode">
                  <SearchBox
                    placeholder="Filter"
                    search={(val) => SET_FILTER({ ...FILTER, query: val })}
                    defaultVal={FILTER.query}
                    liveSearch
                    style={{ borderRadius: '8px 0 0 8px' }}
                  />
                  <div
                    data-tooltip-id="filter-options"
                    data-tooltip-content="Filter Options"
                    onClick={() => setFilterOpen(true)}
                    style={{ borderLeft: '2px solid #11171b' }}
                    className="view"
                  >
                    <FontAwesomeIcon icon={faFilter} size="lg" />
                  </div>
                </div>
                <Tooltip id="filter-options" className="tooltip" />
              </>
            )}
            <div className="view-mode">
              <div
                data-tooltip-id="view"
                data-tooltip-content="Table View"
                onClick={() => setIsList(true)}
                className={isList ? 'view active' : 'view'}
              >
                <FontAwesomeIcon icon={faList} size="lg" fixedWidth />
              </div>
              <div
                data-tooltip-id="view"
                data-tooltip-content="Grid View"
                onClick={() => setIsList(false)}
                className={!isList ? 'view active' : 'view'}
              >
                <FontAwesomeIcon icon={faGrip} size="xl" fixedWidth />
              </div>
            </div>
            <Tooltip
              id="view"
              className="tooltip"
              render={({ content }) => <span>{content}</span>}
            />
          </div>
          {loading && currentUser && (
            <div className="watchlist-skeleton">
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
            </div>
          )}
          {!loading && (
            <>
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
                        windowWidth={width}
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
            </>
          )}
        </div>
      </motion.main>
    </>
  );
}
