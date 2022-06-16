import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
  
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} >
  <div className="container-fluid ">
    <a className={`navbar-brand text-${props.textColor}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link text-${props.textColor} active`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.textColor}`} href="/">{props.aboutText}</a>
        </li>
       </ul>
       {/* <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
       <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
       <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
       <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
       <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div> */}
       
        <div className={`form-check form-switch text-${props.textColor}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
        </div>


      {/* </form> */}
    </div>
  </div>
</nav>
  )
}
Navbar.prototype = {
    title : PropTypes.string ,
    aboutText : PropTypes.string
}
