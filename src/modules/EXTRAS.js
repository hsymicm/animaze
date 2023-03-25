const debounce = (fn, ms) => {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
        }, ms)
    }
}

const handleExpand = (obj, limit, expand) => {
    const arr = Object.entries(obj)
    if (expand || obj.length <= limit + 2) return arr
    return arr.splice(0, limit)
}

export {
    debounce,
    handleExpand,
}