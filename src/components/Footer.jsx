import '@/assets/styles/Style.css';
import '@/assets/styles/Footer.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Footer({ setMenu }) {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-row glb-container">
        <div className="footer-li">
          <h3
            onClick={() => {
              navigate('/');
              setMenu(false);
            }}
            className="text-white pointer"
          >
            AniMaze
          </h3>
          <div className="spacer" />
          <ul className="footer-ul text-white">
            <NavLink
              onClick={() => setMenu(false)}
              to="/"
              className={({ isActive }) => {
                return `link text-white ${isActive ? 'link-active' : ''}`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setMenu(false)}
              to="/watchlist"
              className={({ isActive }) => {
                return `link text-white ${isActive ? 'link-active' : ''}`;
              }}
            >
              Watchlist
            </NavLink>
          </ul>
        </div>
        {/* <p className="text-white footer-credit">
          <span>Made By</span>
          <br />
          M Fadil Hisyam, M Rafli, Rizki Patria
          <br />
          3IA13 - Ujian PWEB
        </p> */}
      </div>
    </footer>
  );
}
