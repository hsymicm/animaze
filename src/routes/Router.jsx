import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SCROLL_TOP from '@/modules/SCROLL_TOP';
import ProgressBar from '@/components/ProgressBar';
import '@/assets/styles/Style.css';

const Home = lazy(() => import('@/pages/Home'));
const Watchlist = lazy(() => import('@/pages/Watchlist'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const SignIn = lazy(() => import('@/pages/SignIn'));

export default function Router({ onEmit }) {
  return (
    <>
      <SCROLL_TOP />
      <Suspense
        fallback={
          <main>
            <ProgressBar />
          </main>
        }
      >
        <Routes>
          <Route index exact path="/" element={<Home onEmit={onEmit} />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Suspense>
    </>
  );
}
