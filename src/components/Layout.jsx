import '@/assets/styles/Style.css';
import '@/assets/styles/Layout.css';

import { Fade as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faRightFromBracket,
  faUser,
  faMagnifyingGlass,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { NavLink, useNavigate } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

import Button from '@/components/Button';
import Backdrop from '@/components/Modals/Backdrop';

import { useAuthState } from '@/modules/AUTH_CONTEXT';
import { db } from '@/modules/FIREBASE_CONFIG';

export default function Layout({ onEmit, menu, setMenu }) {
  const { user, isAuthenticated } = useAuthState();

  const [profile, setProfile] = useState();

  useEffect(() => {
    const getProfile = async () => {
      const obj = await getDoc(doc(db, 'users', user.uid));
      setProfile(obj.data());
    };

    if (user?.auth) getProfile();
  }, [user?.auth]);

  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="nav-row">
          <h2
            onClick={() => {
              navigate('/');
              setMenu(false);
            }}
            className="pointer text-white"
          >
            Ani<span className="text-red">Watch</span>
          </h2>
          <ul className="nav-li text-white">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `link text-white ${isActive ? 'link-active' : ''}`;
              }}
            >
              <span className="link-text">Home</span>
              <div
                data-tooltip-id="link-icon-tooltip"
                data-tooltip-content="Home"
              >
                <FontAwesomeIcon
                  className="link-icon"
                  icon={faHouse}
                  style={{ padding: '16px' }}
                  size="lg"
                />
              </div>
            </NavLink>
            <NavLink onClick={onEmit} className="link text-white">
              <span className="link-text">Search Anime</span>
              <div
                data-tooltip-id="link-icon-tooltip"
                data-tooltip-content="Search Anime"
              >
                <FontAwesomeIcon
                  className="link-icon"
                  icon={faMagnifyingGlass}
                  style={{ padding: '16px' }}
                  size="lg"
                />
              </div>
            </NavLink>
            <NavLink
              to="/watchlist"
              className={({ isActive }) => {
                return `link text-white ${isActive ? 'link-active' : ''}`;
              }}
            >
              <span className="link-text">Watchlist</span>
              <div
                data-tooltip-id="link-icon-tooltip"
                data-tooltip-content="Watchlist"
              >
                <FontAwesomeIcon
                  className="link-icon"
                  icon={faBarsStaggered}
                  style={{ padding: '16px' }}
                  size="lg"
                />
              </div>
            </NavLink>
            {!isAuthenticated && (
              <Button
                onClick={() => navigate('/signin')}
                className="btn btn-primary"
                label="Sign In"
              />
            )}
            {isAuthenticated && (
              <img
                style={{ cursor: 'pointer' }}
                src={profile?.profilePicture}
                alt="profile"
                className="profile-pic"
                width={42}
                height={42}
              />
            )}
          </ul>
          <Tooltip place="left" id="link-icon-tooltip" className="tooltip" />
        </div>
      </nav>
      <div className="nav-drop glb-container">
        <Hamburger
          toggled={menu}
          toggle={setMenu}
          size={28}
          color="#e5e5e5"
          easing="ease"
          rounded
        />
      </div>
      <AnimatePresence>
        {menu && (
          <>
            <motion.div
              initial={{ right: '-100%' }}
              animate={{ right: 0 }}
              exit={{ right: '-100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="menu glb-container"
            >
              <div className="sub-menu">
                {isAuthenticated && (
                  <div
                    style={{ padding: '32px 20px' }}
                    className="text-white menu-profile"
                  >
                    <img
                      className="profile-pic"
                      src={profile?.profilePicture}
                      alt="profile"
                      width={64}
                      height={64}
                    />
                    <div className="profile-info">
                      {profile?.username}
                      <span>Verified</span>
                    </div>
                  </div>
                )}
                <NavLink
                  onClick={() => setMenu(false)}
                  to="/"
                  className={({ isActive }) => {
                    return `menu-link text-white ${
                      isActive ? 'menu-link-active' : ''
                    }`;
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                  </span>
                </NavLink>
                <div
                  onClick={() => {
                    setMenu(false);
                    onEmit();
                  }}
                  className="menu-link text-white"
                >
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    Search Anime
                  </span>
                </div>
                <NavLink
                  onClick={() => setMenu(false)}
                  to="/watchlist"
                  className={({ isActive }) => {
                    return `menu-link text-white ${
                      isActive ? 'menu-link-active' : ''
                    }`;
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                    Watchlist
                  </span>
                </NavLink>
                {!isAuthenticated && (
                  <NavLink
                    to="/signin"
                    onClick={() => {
                      setMenu(false);
                    }}
                    className={({ isActive }) => {
                      return `menu-link text-white ${
                        isActive ? 'menu-link-active' : ''
                      }`;
                    }}
                  >
                    <span>
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      Sign In
                    </span>
                  </NavLink>
                )}
              </div>
              {isAuthenticated && (
                <div className="sub-menu">
                  <NavLink
                    onClick={() => setMenu(false)}
                    className="menu-link text-white"
                  >
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                      Profile
                    </span>
                  </NavLink>
                  <div
                    onClick={() => {
                      setMenu(false);
                      signOut(user.auth);
                      toast("You've been Signed out", {
                        duration: 2000,
                      });
                    }}
                    className="menu-link text-white"
                  >
                    <span>
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      Sign Out
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
            <Backdrop onClick={() => setMenu(false)} blur={false} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
