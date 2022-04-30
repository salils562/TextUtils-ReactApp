import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props) {
let greenModeWhite={
  color:'white'
}  
let greenModeDark={
  color:'black'
}
let titleStyle={
  fontWeight:'bold'
}  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#" style={titleStyle}>{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <div className="form-check form-switch mx-2">
        <input className="form-check-input" onClick={props.modeSetter} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable DarkMode":"Disable DarkMode"}</label>
        </div>
        <div class="form-check form-switch mx-2">
        <input class="form-check-input" onClick={props.greenMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label class="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.mode==='light'?greenModeDark:greenModeWhite}>{props.greenmode==='light'?"Enable GreenMode":"Disable GreenMode"}</label>
      </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
    aboutMe: PropTypes.string
}