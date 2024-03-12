import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contactus from './pages/Contactus'
import Login from './pages/Login'

function router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/contact' element={<Contactus />} />
                <Route path='/shopping' element={<Home/>}/>
            </Routes>

        </>
    )
}

export default router
