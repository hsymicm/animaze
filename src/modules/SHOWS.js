export const template = {
  Watching: [],
  Completed: [],
  Planning: [],
}

const setInitial = () => {
  setStorage("watchlist", template)
  return getStorage("watchlist")
}

const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
  window.dispatchEvent(new Event("storage"))
}

const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const getWatchlist = () => {
  const shows = getStorage("watchlist")
  return shows ? shows : setInitial()
}

export const addWatchlist = (show, status) => {
  const shows = getWatchlist()
  shows[status].unshift(show)
  setStorage("watchlist", shows)
}

export const delWatchlist = (id, status) => {
  const shows = getWatchlist()
  shows[status] = shows[status].filter((s) => s.id !== id)
  setStorage("watchlist", shows)
}

export const updateWatchlist = (id, status, updatedStatus, show) => {
  const shows = getWatchlist()
  if (status === updatedStatus) {
    const index = shows[status].findIndex((s) => s.id === id)
    shows[updatedStatus][index] = show
  } else {
    shows[status] = shows[status].filter((s) => s.id !== id)
    shows[updatedStatus].unshift(show)
  }
  setStorage("watchlist", shows)
}
