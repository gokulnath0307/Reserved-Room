import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import '../Admin.css'

export default function AdminSideMenu() {
  
  return (
    <Card className="AdminSideMenu">
      <ul className="list-unstyled submenu text-start">
      <a href="/admin/dashboard" className="adminmenu text-decoration-none">
          <li
            className="border p-2 "
           
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} className="mx-1" />
            Dashboard
          </li>
        </a>

        <a href="/admin/userdetails" className="adminmenu text-decoration-none">
          <li
            className="border p-2 "
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} className="mx-1" />
           User Details 
          </li>
        </a>
        <a href="/" className="adminmenu text-decoration-none">
          <li
            className="border p-2 "
           
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} className="mx-1" />
            Logout
          </li>
        </a>
      </ul>
    </Card>
  );
}
