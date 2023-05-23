/* eslint-disable no-param-reassign */
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/modules/FIREBASE_CONFIG';

export const listenWatchList = (currentUser, setShowsCallback) => {
  const showRef = doc(db, 'watchlists', currentUser.uid);
  const unsubscribe = onSnapshot(showRef, (snapshot) => {
    const { watching, completed, planning } = snapshot.get('watchList');
    const newObj = {
      Watching: watching,
      Completed: completed,
      Planning: planning,
    };
    setShowsCallback(newObj);
  });

  return unsubscribe;
};

const getWatchList = async (currentUser) => {
  const objRef = doc(db, 'watchlists', currentUser.uid);
  const obj = await getDoc(objRef);
  const shows = obj.data().watchList;
  return { shows, objRef };
};

const setWatchList = async (shows, objRef) => {
  const updatedAt = Date.now();
  await setDoc(
    objRef,
    {
      updatedAt,
      watchList: shows,
    },
    { merge: true }
  );
};

export const addWatchList = async (show, status, currentUser) => {
  status = status.toLowerCase();
  const { shows, objRef } = await getWatchList(currentUser);

  const exists = Object.keys(shows).some((key) => {
    return shows[key].find((obj) => obj.id === show.id);
  });

  if (!exists) {
    shows[status].unshift(show);
    await setWatchList(shows, objRef);
  } else {
    throw new Error('Data already exists');
  }
};

export const delWatchList = async (id, status, currentUser) => {
  status = status.toLowerCase();
  const { shows, objRef } = await getWatchList(currentUser);
  shows[status] = shows[status].filter((s) => s.id !== id);
  await setWatchList(shows, objRef);
};

export const updateWatchList = async (
  id,
  status,
  updatedStatus,
  show,
  currentUser
) => {
  const { shows, objRef } = await getWatchList(currentUser);
  status = status.toLowerCase();
  updatedStatus = updatedStatus.toLowerCase();
  if (status === updatedStatus) {
    const index = shows[status].findIndex((s) => s.id === id);
    shows[updatedStatus][index] = show;
  } else {
    shows[status] = shows[status].filter((s) => s.id !== id);
    shows[updatedStatus].unshift(show);
  }
  await setWatchList(shows, objRef);
};
