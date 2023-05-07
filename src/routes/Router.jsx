import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SCROLL_TOP from '@/modules/SCROLL_TOP';
import ProgressBar from '@/components/ProgressBar';
import PrivateRoute from '@/routes/PrivateRoute';
import DocumentTitle from '@/routes/DocumentTitle';
import '@/assets/styles/Style.css';

const Home = lazy(() => import('@/pages/Home'));
const Watchlist = lazy(() => import('@/pages/Watchlist'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const Profile = lazy(() => import('@/pages/Profile'));
const ResetPassword = lazy(() => import('@/pages/ResetPassword'));

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
          <Route
            path="/watchlist"
            element={
              <PrivateRoute
                element={
                  <DocumentTitle title="Watchlist - Animaze">
                    <Watchlist />
                  </DocumentTitle>
                }
              />
            }
          />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/signup"
            element={
              <DocumentTitle title="Sign up - Animaze">
                <SignUp />
              </DocumentTitle>
            }
          />
          <Route
            path="/signin"
            element={
              <DocumentTitle title="Sign in - Animaze">
                <SignIn />
              </DocumentTitle>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute
                element={
                  <DocumentTitle title="Profile details - Animaze">
                    <Profile />
                  </DocumentTitle>
                }
              />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
