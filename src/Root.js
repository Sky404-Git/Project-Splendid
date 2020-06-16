import React from "react";
import Home from "./Home/Home";
import UploadPage from "./DataRequirement/UploadPage";
import DataUpload from "./DataUpload/DataUpload";
import CheckData from "./CheckData/CheckData";
import Practice from "./Practice.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Route, Switch} from "react-router-dom";

const Root = () => {
    return (
        <>
        
        <Switch>
        <Route component={Home} exact path="/" />
        <Route component={UploadPage} path="/data_requirement" />
        {/* <Route component={DataUpload} path="/data_upload" /> */}
        <Route component={CheckData} path="/check_data" />
        <Route component={Practice} path="/data_upload" />
        </Switch>
        
        </>
    );
};

export default Root;
