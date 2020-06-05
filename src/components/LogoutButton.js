import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const LogoutButton = () => {
    return (
    <>
        <button className="btn dropdown-toggle border" data-toggle="dropdown" style={{color:"white", float:"right", margin:"18px 100px 0px 0px"}}></button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href=" ">Profile</a>
        <a className="dropdown-item" href=" ">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href=" ">Log out</a>
      
    </div>
    </>
    );
};
export default LogoutButton;