export const truncate = (str, n) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str
}

export const caption = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
