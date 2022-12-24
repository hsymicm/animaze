import '@/assets/styles/Style.css'
import '@/assets/styles/Layout.css'
import Button from '@/components/Button'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Layout({onEmit}) {
    const navigate = useNavigate()
    return (
        <nav>
            <div className="nav-row">
                <h2
                onClick={() => navigate(`${import.meta.env.BASE_URL}`)}
                className="pointer text-white"
                >Ani<span className="text-red">Watch</span></h2>
                <ul className="nav-li text-white">
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
                    <Button onClick={onEmit} className="btn btn-primary" label="Add Anime"/>
                </ul>
            </div>
        </nav>
    )
}

