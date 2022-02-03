import React from "react";
import { Card } from "react-bootstrap";
import '../Admin.css'

export default function AdminSideMenu() {
  
  return (
    <Card className="AdminSideMenu">
      <ul className="list-unstyled submenu text-start">
      <a href="/admin/dashboard" className="adminmenu text-decoration-none">
          <li
            className="border p-2 "
           
          >
            
            Dashboard
          </li>
        </a>

        <a href="/admin/userdetails" className="adminmenu text-decoration-none">
          <li
            className="border p-2 "
          >
           
           User Details 
          </li>
        </a>
        <a href="/" onClick={localStorage.removeItem("userToken")} className="adminmenu text-decoration-none">
          <li
            className="border p-2 "
           
          >
            Logout
          </li>
        </a>
      </ul>
    </Card>
  );
}
