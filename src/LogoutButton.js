<<<<<<< HEAD
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const LogoutButton = () => {
    return (
    <>
        <button class="btn dropdown-toggle border" data-toggle="dropdown" style={{color:"white", float:"right", margin:"18px 100px 0px 0px"}}></button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href=" ">Profile</a>
        <a className="dropdown-item" href=" ">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href=" ">Log out</a>
      
    </div>
    </>
    );
};
=======
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const LogoutButton = () => {
    return (
    <>
        <button class="btn dropdown-toggle border" data-toggle="dropdown" style={{color:"white", float:"right", margin:"18px 100px 0px 0px"}}></button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href=" ">Profile</a>
        <a className="dropdown-item" href=" ">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href=" ">Log out</a>
      
    </div>
    </>
    );
};
>>>>>>> d27491cc133504da9f7ae1d27d8652144ceb20bc
export default LogoutButton;