<<<<<<< HEAD
import React from "react";
import {Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

const DataUploadCard = (props) => {
    return(
    <>
    
    <div className="card">
    <img 
     className="card-img-top" 
     src={props.imgsrc}
     alt="Card Icon6" 
     style={{width:"45px", height:"45px", padding:"8px"}}/>   
    <div className="card-body">
    <h4 className="card-title" style={{color:"white", fontSize:"16px"}}>{props.head}</h4>
    <p className="card-text" style={{color:"white", fontSize:"12px"}}>{props.body}</p>
            <Link to={props.link} class="stretched-link"></Link>
        </div>
     </div>

    </>
    );
};
=======
import React from "react";
import {Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

const DataUploadCard = (props) => {
    return(
    <>
    
    <div className="card">
    <img 
     className="card-img-top" 
     src={props.imgsrc}
     alt="Card Icon6" 
     style={{width:"45px", height:"45px", padding:"8px"}}/>   
    <div className="card-body">
    <h4 className="card-title" style={{color:"white", fontSize:"16px"}}>{props.head}</h4>
    <p className="card-text" style={{color:"white", fontSize:"12px"}}>{props.body}</p>
            <Link to={props.link} class="stretched-link"></Link>
        </div>
     </div>

    </>
    );
};
>>>>>>> d27491cc133504da9f7ae1d27d8652144ceb20bc
export default DataUploadCard;