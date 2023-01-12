import '@/assets/styles/Style.css'
import '@/assets/styles/Layout.css'
import Button from '@/components/Button'
import Backdrop from '@/components/Modals/Backdrop';
import { NavLink, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react'

export default function Layout({onEmit, menu, setMenu}) {
    const navigate = useNavigate()
    return (
        <>
        <nav>
            <div className="nav-row">
                <h2
                onClick={() => {
                    navigate("/")
                    setMenu(false)
                }}
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
                        to="/watchlist"
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
        <div className="nav-drop glb-container">
            <Hamburger
                toggled={menu}
                toggle={setMenu}
                size={28} 
                color='#e5e5e5'
                easing='ease'
                rounded
            />
        </div>
        <div className={`menu glb-container ${menu ? 'menu-active' : ''}`}>
            <NavLink 
                onClick={() => setMenu(false)}
                to="/"
                className={ ({isActive}) => {
                    return "menu-link text-white " + ( isActive ? "menu-link-active" : "")
                }}
            >
                Home
            </NavLink>
            <NavLink
                onClick={() => setMenu(false)}
                to="/watchlist"
                className={ ({isActive}) => {
                    return "menu-link text-white " + ( isActive ? "menu-link-active" : "")
                }}
            >
                Watchlist
            </NavLink>
            <Button
                style={{marginTop: '12px'}}
                onClick={() => {
                    setMenu(false)
                    onEmit()
                }} 
                className="btn btn-border" label="Add Anime"
            />
        </div>
        {menu && <Backdrop 
            onClick={() => setMenu(false)}
            blur={false} />}
        </>
    )
}

