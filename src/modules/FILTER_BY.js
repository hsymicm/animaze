/**
 * Filter Object by Status
 * @param {Object} obj - Anime data
 * @param {string} curStatus - Current status filter
 * @returns {Object} Filtered object by status
 */
const filterByStatus = (obj, curStatus) => {
    if(curStatus === 'All') return obj
    let temp = {}
    return {...temp, [curStatus] : obj[curStatus]}
}

/**
 * Filter Object by Search Queries
 * @param {Object} obj - Anime data 
 * @param {string} query - Search filter queries
 * @returns {Object} Filtered object by search queries
 */
const filterBySearch = (obj, query) => {
    if(!query) return obj
    let temp = {}
    const asArray = Object.entries(obj)
    asArray.forEach(([key, value]) => {
        const data = value.filter((show) => show.title.toLowerCase().includes(query.toLowerCase()))
        temp = {...temp, [key] : data }
    })
    return temp
}

export {filterBySearch, filterByStatus}