import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import AdminLogin from './AdminLogin/AdminLogin';
import AdminHomepage from './Homepage/AdminHomepage';

export default function AdminPage() {
    return (
        <div>
            
            <Routes>
                <Route path='/admin' element={<AdminLogin/>}  />
                <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
                <Route path='/admin/homepage' element={<AdminHomepage/>}/>
            </Routes>
        </div>
       
    )
}
