import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SCROLL_TOP from '@/modules/SCROLL_TOP'
import Home from '@/pages/Home'
import Watchlist from '@/pages/Watchlist'

export default function Router({onEmit}) {
    return (
        <>
        <SCROLL_TOP />
        <Routes>
            <Route
                index
                exact
                path="/"
                element={ <Home onEmit={onEmit} /> }
            />
            <Route
                path="/watchlist"
                element={ <Watchlist /> }
            />
        </Routes>
        </>
    )
}

