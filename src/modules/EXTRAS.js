const handleExpand = (obj, limit, expand) => {
  const arr = Object.entries(obj);
  if (expand || obj.length <= limit + 2) return arr;
  return arr.splice(0, limit);
};

export default handleExpand;
