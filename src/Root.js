import React from "react";
import Home from "./Home";
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
        <Route component={UploadPage} path="/data_requirement" />
        <Route component={DataUpload} path="/data_upload" />
        <Route component={CheckData} path="/check_data" />
        </Switch>
        
        </>
    );
};

export default Root;
