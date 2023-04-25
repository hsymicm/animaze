/* eslint-disable no-param-reassign */
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/modules/FIREBASE_CONFIG';

export const listenWatchList = (
  currentUser,
  callback,
  filterCallback,
  loadingCallback
) => {
  const showRef = doc(db, 'watchlists', currentUser.uid);
  const unsubscribe = onSnapshot(showRef, (snapshot) => {
    const fieldValue = snapshot.get('watchList');
    const newObj = {
      Watching: fieldValue.watching,
      Completed: fieldValue.completed,
      Planning: fieldValue.planning,
    };
    callback(newObj);
    filterCallback(newObj);
    loadingCallback(false);
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
  shows[status].unshift(show);
  await setWatchList(shows, objRef);
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
