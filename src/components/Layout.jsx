import '@/assets/styles/Style.css'
import '@/assets/styles/Layout.css'
import Button from '@/components/Button'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Layout() {
    const navigate = useNavigate()
    return (
        <nav>
            <div className="nav-row">
                <h2
                onClick={() => navigate("/")}
                className="pointer text-white"
                >Ani<span className="text-red">Watch</span></h2>
                <ul className="nav-li text-white">
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
                    <Button className="btn btn-primary" label="Add Anime"/>
                </ul>
            </div>
        </nav>
    )
}

