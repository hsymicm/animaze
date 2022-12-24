export const template = {
    "Watching" : [],
    "Completed" : [],
    "Planning" : []
}

const setInitial = () => {
    setStorage('watchlist', template)
    return getStorage('watchlist')
}

const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    window.dispatchEvent(new Event("storage"))
}

const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const getWatchlist = () => {
    const shows = getStorage('watchlist')
    return shows ? shows : setInitial()
}

export const addWatchlist = (show, status) => {
    const shows = getWatchlist()
    shows[status].push(show)
    setStorage('watchlist', shows)
}

export const delWatchlist = (index, status) => {
    const shows = getWatchlist()
    shows[status].splice(index, 1)
    setStorage('watchlist', shows)
}

export const updateWatchlist = (index, status, updatedStatus, show) => {
    const shows = getWatchlist()
    shows[status].splice(index, 1)
    if(status === updatedStatus) {
        shows[updatedStatus].splice(index, 0, show)
    } else {
        shows[updatedStatus].push(show)
    }
    setStorage('watchlist', shows)
}
