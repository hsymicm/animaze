import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SCROLL_TOP from '@/modules/SCROLL_TOP';
import '@/assets/styles/Style.css';

const Home = lazy(() => import('@/pages/Home'));
const Watchlist = lazy(() => import('@/pages/Watchlist'));

export default function Router({ onEmit }) {
  return (
    <>
      <SCROLL_TOP />
      <Suspense fallback={<main />}>
        <Routes>
          <Route index exact path="/" element={<Home onEmit={onEmit} />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Suspense>
    </>
  );
}
