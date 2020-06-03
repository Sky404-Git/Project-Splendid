<<<<<<< HEAD
import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UploadPage from "./UploadPage";
import DataUpload from "./DataUpload";
import CheckData from "./CheckData";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Route, Switch} from "react-router-dom";

const Root = () => {
    return (
        <>
        
        <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={UploadPage} path="/data_requirement" />
        <Route component={DataUpload} path="/data_upload" />
        <Route component={CheckData} path="/check_data" />
        </Switch>
        
        </>
    );
};

export default Root;
=======
import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UploadPage from "./UploadPage";
import DataUpload from "./DataUpload";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Route, Switch} from "react-router-dom";

const Root = () => {
    return (
        <>
        
        <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={UploadPage} path="/data_requirement" />
        <Route component={DataUpload} path="/data_upload" />
        </Switch>
        
        </>
    );
};

export default Root;
>>>>>>> d27491cc133504da9f7ae1d27d8652144ceb20bc
