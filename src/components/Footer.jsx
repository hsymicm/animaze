import '@/assets/styles/Style.css'
import '@/assets/styles/Footer.css'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer>
            <div className='footer-row'>
                <div className='footer-li'>
                    <h3 
                    onClick={() => {
                        navigate(`${import.meta.env.BASE_URL}`)
                    }}
                    className='text-white pointer'
                    >AniWatch</h3>
                    <div className="spacer"></div>
                    <ul className="footer-ul text-white">
                        <NavLink 
                            to={`${import.meta.env.BASE_URL}`}
                            className={ ({isActive}) => {
                                return "link text-white " + ( isActive ? "link-active" : "")
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={`${import.meta.env.BASE_URL}watchlist`}
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