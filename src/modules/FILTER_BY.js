import fuzzysort from 'fuzzysort';

const filterByStatus = (obj, curStatus) => {
  return curStatus === 'All' ? obj : { [curStatus]: obj[curStatus] };
};

const filterBySearch = (obj, query, fuzzy = false) => {
  if (!query) return obj;
  let newObj = {};
  const asArray = Object.entries(obj);
  asArray.forEach(([key, value]) => {
    const q = query.toLowerCase();
    let results;
    if (!fuzzy) {
      results = value.filter((show) => {
        const availableTitle = show.title.english
          ? show.title.english
          : show.title.romaji;
        return availableTitle.toLowerCase().includes(q);
      });
    } else {
      results = fuzzysort
        .go(q, value, {
          all: true,
          threshold: -50000,
          keys: ['title.english', 'title.romaji'],
        })
        .map((result) => result.obj);
    }
    newObj = { ...newObj, [key]: results };
  });
  return newObj;
};

const filterArray = (obj, filter, func) => {
  if (!filter) return obj;
  let newObj = {};
  const asArray = Object.entries(obj);
  asArray.forEach(([key, value]) => {
    const data = value.filter(func);
    newObj = { ...newObj, [key]: data };
  });
  return newObj;
};

const filterByType = (obj, type) => {
  return filterArray(
    obj,
    type,
    (show) => type.toLowerCase() === show.type.replace('_', ' ').toLowerCase()
  );
};

const filterByGenre = (obj, genre) => {
  return filterArray(obj, genre, (show) => show.genres.includes(genre));
};

const compareTitle = (a, b) => {
  const title = (o) => (o.title.english ? o.title.english : o.title.romaji);
  return (title(a) > title(b)) - (title(a) < title(b));
};

const compareScore = (a, b) => b.score - a.score;

const compareCompletion = (a, b) => {
  const completion = (o) => o.progress / o.episodes;
  return completion(b) - completion(a);
};

const SORT_TEMPLATE = {
  Title: compareTitle,
  Score: compareScore,
  Completion: compareCompletion,
};

const sortTypes = () => {
  return Object.keys(SORT_TEMPLATE);
};

const sortBy = (obj, type) => {
  if (!(type || sortTypes().includes(type))) return obj;
  const temp = { ...obj };
  const asArray = Object.values(temp);
  asArray.forEach((value) => {
    value.sort(SORT_TEMPLATE[type]);
  });
  return temp;
};

const reverseObj = (obj, bool) => {
  if (!bool) return obj;
  let temp = {};
  const asArray = Object.entries(obj);
  asArray.forEach(([key, value]) => {
    const results = value.reverse();
    temp = { ...temp, [key]: results };
  });
  return temp;
};

export {
  filterBySearch,
  filterByStatus,
  filterByType,
  filterByGenre,
  sortBy,
  sortTypes,
  reverseObj,
};
