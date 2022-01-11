import React from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './components/Header/Header'

export default function screen() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header/>} />
                
            </Routes>
        </div>
    )
}
