<<<<<<< HEAD
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const ToggleButton = () => {
    return (
    <div className="container-fluid mx-0" style={{width:"25%"}}>
        <button class="btn dropdown-toggle border my-3" data-toggle="dropdown" style={{color:"white", float:"right"}}></button>
    <div className="dropdown-menu">
        <a className="dropdown-item" href=" ">Profile</a>
        <a className="dropdown-item" href=" ">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href=" ">Log out</a>
      
    </div>
    </div>
    );
};
=======
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const ToggleButton = () => {
    return (
    <div className="container-fluid mx-0" style={{width:"25%"}}>
        <button class="btn dropdown-toggle border my-3" data-toggle="dropdown" style={{color:"white", float:"right"}}></button>
    <div className="dropdown-menu">
        <a className="dropdown-item" href=" ">Profile</a>
        <a className="dropdown-item" href=" ">Settings</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href=" ">Log out</a>
      
    </div>
    </div>
    );
};
>>>>>>> d27491cc133504da9f7ae1d27d8652144ceb20bc
export default ToggleButton;