import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '@/modules/ScrollToTop'
import Home from '@/pages/Home'
import Watchlist from '@/pages/Watchlist'

export default function Router({onEmit}) {
    return (
        <>
        <ScrollToTop />
        <Routes>
            <Route
                index
                exact
                path={`${import.meta.env.BASE_URL}`}
                element={ <Home onEmit={onEmit} /> }
            />
            <Route
                path={`${import.meta.env.BASE_URL}watchlist`}
                element={ <Watchlist /> }
            />
        </Routes>
        </>
    )
}