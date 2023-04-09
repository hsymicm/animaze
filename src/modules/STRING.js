export const truncate = (str, n) => {
  if (str.length < n) return str;
  const truncated = str.substr(0, n);
  return `${truncated.substr(
    0,
    Math.min(truncated.length, truncated.lastIndexOf(' '))
  )}...`;
};

export const caption = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
