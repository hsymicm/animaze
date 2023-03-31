// CSS IMPORT
import "@/assets/styles/Style.css"
import "@/assets/styles/Watchlist.css"

// SVG IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faGrip, faFilter } from "@fortawesome/free-solid-svg-icons"

// COMPONENT IMPORT
import TableShow from "@/components/TableShow"
import GridShow from "@/components/GridShow"
import Modal from "@/components/Modals/Modal"
import Empty from "@/components/Empty"
import SearchBox from "@/components/SearchBox"
import Aside from "@/components/Aside"

// MODULE IMPORT
import { useState, useEffect } from "react"
import {
  filterBySearch,
  filterByStatus,
  filterByType,
  filterByGenre,
  sortBy,
  reverseObj,
} from "@/modules/FILTER_BY"
import { getWatchlist, template } from "@/modules/SHOWS"
import Order from "@/assets/data/Order"
import FilterModal from "@/components/Modals/FilterModal"
import { motion, AnimatePresence } from "framer-motion"
import { Tooltip } from "react-tooltip"

export default function Watchlist() {
  const [isList, setIsList] = useState(true)
  const [filterOpen, setFilterOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [objUpdate, setObjUpdate] = useState(null)
  const [shows, setShows] = useState(getWatchlist())
  const [width, setWindowWidth] = useState(window.innerWidth)
  const [FILTER, SET_FILTER] = useState({
    query: "",
    status: "All",
    type: "",
    genre: "",
    sort_by: "",
    asc: true,
  })

  const handleEdit = (status, id, obj) => {
    setObjUpdate({
      status: status,
      id: id,
      obj: obj,
    })
    setIsOpen(true)
  }

  const handleShows = () => {
    let result = getWatchlist()
    result = filterByStatus(result, FILTER.status)
    result = filterByType(result, FILTER.type)
    result = filterByGenre(result, FILTER.genre)
    result = filterBySearch(result, FILTER.query, true)
    result = sortBy(result, FILTER.sort_by)
    result = reverseObj(result, !FILTER.asc)
    return result
  }

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  // ON MOUNTED
  useEffect(() => {
    const handler = () => {
      setShows(handleShows)
    }
    window.addEventListener("storage", handler)
    return () => {
      window.removeEventListener("storage", handler)
    }
  })

  // ON WINDOW RESIZE
  useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // ON FILTER CHANGE
  useEffect(() => {
    setShows(handleShows)
  }, [FILTER])

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
              liveSearch={true}
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
                  liveSearch={true}
                  style={{ borderRadius: "8px 0 0 8px" }}
                />
                <div
                  data-tooltip-id="filter-options"
                  data-tooltip-content="Filter Options"
                  onClick={() => setFilterOpen(true)}
                  style={{ borderLeft: "2px solid #11171b" }}
                  className="view"
                >
                  <FontAwesomeIcon icon={faFilter} size="lg" />
                </div>
              </div>
              <Tooltip
                id="filter-options"
                className="tooltip"
              />
              </>
            )}
            <div className="view-mode">
              <div
                data-tooltip-id="view"
                data-tooltip-content="Table View"
                onClick={() => setIsList(true)}
                className={isList ? "view active" : "view"}
              >
                <FontAwesomeIcon icon={faList} size="lg" fixedWidth />
              </div>
              <div
                data-tooltip-id="view"
                data-tooltip-content="Grid View"
                onClick={() => setIsList(false)}
                className={!isList ? "view active" : "view"}
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
          {Object.entries(shows).map(([key, value]) =>
            value.length !== 0 ? (
              <div key={key} className="table-container">
                {!isList && (
                  <GridShow
                    status={key}
                    shows={value}
                    handleEdit={(status, index, obj) => {
                      handleEdit(status, index, obj)
                    }}
                  />
                )}
                {isList && (
                  <TableShow
                    status={key}
                    shows={value}
                    windowWidth={width}
                    handleEdit={(status, id, obj) => {
                      handleEdit(status, id, obj)
                    }}
                  />
                )}
              </div>
            ) : null
          )}
          {Object.keys(shows).every((key) => shows[key].length === 0) && (
            <Empty />
          )}
        </div>
      </motion.main>
    </>
  )
}
