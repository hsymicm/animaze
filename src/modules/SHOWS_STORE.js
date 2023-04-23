import { getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/modules/FIREBASE_CONFIG';

export const getWatchList = async (userId) => {
  const shows = await getDoc(doc(db, 'watchlists', userId));
  return shows.data().watchList;
};

export const addWatchList = async (userId, show, status) => {
  const shows = await getWatchList(userId);
  shows[status].unshift(show);
  await updateDoc(
    doc(db, 'watchlists', {
      watchList: shows,
    })
  );
};

export const delWatchList = async (userId, id, status) => {
  const shows = await getWatchList(userId);
  shows[status] = shows[status].filter((s) => s.id !== id);
  await updateDoc(
    doc(db, 'watchlists', {
      watchList: shows,
    })
  );
};

export const updateWatchList = async (
  userId,
  id,
  status,
  updatedStatus,
  show
) => {
  const shows = await getWatchList(userId);
  if (status === updatedStatus) {
    const index = shows[status].findIndex((s) => s.id === id);
    shows[updatedStatus][index] = show;
  } else {
    shows[status] = shows[status].filter((s) => s.id !== id);
    shows[updatedStatus].unshift(show);
  }
  await updateDoc(
    doc(db, 'watchlists', {
      watchList: shows,
    })
  );
};
