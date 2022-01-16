import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function AdminSideMenu() {
  
  return (
    <Card className="AdminSideMenu">
      <ul className="list-unstyled submenu text-start">
      <a href="/admin/dashboard" className="text-decoration-none">
          <li
            className="border p-2 "
           
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} className="mx-1" />
            Dashboard
          </li>
        </a>
        <a href="/admin/homepage" className="text-decoration-none">
          <li
            className="border p-2 "
           
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} className="mx-1" />
           Home Page
          </li>
        </a>
        <a href="/admin" className="text-decoration-none">
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
