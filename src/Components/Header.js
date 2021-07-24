import React from 'react'
import {Link} from 'react-router-dom';

export default function header(props) {
    props.setLoader(false);
    return (
        <div >
          
            <nav className="navbar navbar-expand-lg navbar-light" style={{
              backgroundColor:"Gold"
            }}>
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/" style={{
      fontWeight:"1000",
      color:"DodgerBlue"
    }}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
          <Link className="nav-link" to="/about" style={{
      fontWeight:"bold",
      color:"DodgerBlue"
    }}>About</Link>
      
        
      <Link className="nav-link ff " onClick={props.logoutHandler} style={{
      fontWeight:"bold",
      color:"DodgerBlue"
    }}>Logout</Link>
      
    </div>
  </div>
</nav>
        </div>
    )
}
