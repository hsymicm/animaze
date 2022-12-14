import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from '../modules/ScrollToTop'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Watchlist from '@/pages/Watchlist'

export default function Router() {
    return (
        <>
        <ScrollToTop />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/watchlist" element={ <Watchlist /> } />
        </Routes>
        </>
    )
}