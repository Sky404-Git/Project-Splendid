<<<<<<< HEAD
import React from 'react';

function Container(props){
    return(
        <>
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href=" ">Active</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href=" ">Link</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href=" ">Link</a>
        </li>
      </ul>
    <div className="container">
    
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="cont_body">
        <h1>{props.con1}</h1>
        <h1>{props.con2}</h1>
        <h1>{props.con3}</h1>
      </div>
    </div>
    </>
    );
}
=======
import React from 'react';

function Container(props){
    return(
        <>
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href=" ">Active</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href=" ">Link</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href=" ">Link</a>
        </li>
      </ul>
    <div className="container">
    
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="cont_body">
        <h1>{props.con1}</h1>
        <h1>{props.con2}</h1>
        <h1>{props.con3}</h1>
      </div>
    </div>
    </>
    );
}
>>>>>>> d27491cc133504da9f7ae1d27d8652144ceb20bc
export default Container;