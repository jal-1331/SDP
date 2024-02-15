import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light shape">
      <nav className="container ">
        <a className="navbar-brand" href="#">
          DocPlant
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse left"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link navbar-brand" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-brand" href="#">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-brand" href="#">
                contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
