import '@/assets/styles/Style.css'
import '@/assets/styles/Footer.css'
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className='footer-row'>
                <div className='footer-li'>
                    <h3 className='text-white'>AniWatch</h3>
                    <div className="spacer"></div>
                    <ul className="footer-ul text-white">
                        <NavLink 
                            to="/"
                            className={ ({isActive}) => {
                                return "link text-white " + ( isActive ? "link-active" : "")
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={ ({isActive}) => {
                                return "link text-white " + ( isActive ? "link-active" : "")
                            }}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/watchlist"
                            className={ ({isActive}) => {
                                return "link text-white " + ( isActive ? "link-active" : "")
                            }}
                        >
                            Watchlist
                        </NavLink>
                    </ul>                    
                </div>
                <p className='text-white footer-credit'>
                    <span>Made By</span><br/>
                    M Fadil Hisyam, M Rafli, Rizki Patria<br/>
                    3IA13 - Ujian PWEB
                </p>
            </div>
        </footer>
    )
}