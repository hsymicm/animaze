const filterByStatus = (obj, curStatus) => {
    if(curStatus === 'All') return obj
    const temp = {}
    return {...temp, [curStatus] : obj[curStatus]}
}

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