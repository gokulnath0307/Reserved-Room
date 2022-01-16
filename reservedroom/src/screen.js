import React from 'react'
import {  Route, Routes } from "react-router-dom"
import AdminPage from '../src/components/Admin/AdminPage'
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard'
import AdminLogin from './components/Admin/AdminLogin/AdminLogin'
import Calendar from './components/Forms/calendar'
import Header from './components/Header/Header'
import Table from './components/Table/Table'


export default function screen() {
    return (
        <div>
            
            <Routes>
               <Route path='/' element={<Header/>}/>
              {/* <Route path='/' element={<Table/>}/>  */}
              <Route exact path='/admin' element={<AdminLogin/>}/>
              <Route exact path='/admin/dashboard' element={<AdminDashboard/>}/>
              
              <Route exact path='/booking' element={<Calendar/>}/>
            </Routes>
        </div>
    )
}
