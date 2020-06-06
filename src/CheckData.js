import React from "react";
import Navbar from "./components/Navbar";
import LogoutButton from "./components/LogoutButton";
import UploadTopBar from "./components/UploadTopBar";
import {Link} from "react-router-dom";
import CheckDataTable from "./components/CheckDataTable";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import WarningCard from "./components/WarningCard";

let head1 = "Upload workforce data for Faethm"
let head2 = "USER DATA TABLE";

const CheckData = () => {
    
    return (
        <>
        <div className="container-fluid" style={{height:"auto", width:"auto"}}>
            <div className="row">
                <div className="col-1" style={{ marginRight:"6%"}}>
                    <Navbar/>
                </div>
                <div className="col-10">
                    <div className="container-fluid" style={{width:"auto", height:"80px"}}>
                        <LogoutButton/>
                    </div>
                    <div className="container-fluid" style={{width:"auto", height:"auto", marginBottom:"40px"}}>
                        <h1 style={{color:"white", fontSize:"28px"}}>{head1}</h1>
                    </div>
                    <UploadTopBar
                      imagesrc1 ="./images/tick.png"
                      imagesrc2 ="./images/tick.png"
                      imagesrc3 ="./images/3a.png"
                      imagesrc4 ="./images/4b.png"
                      imagesrc5 ="./images/5b.png"
                    />
                    <h1 style={{color:"white", fontSize:"18px", marginTop:"30px"}}>{head2}</h1>
                    <div className="container-fluid">
                            <div id="accordion">
                                
                                <WarningCard
                                classname = "card bg-danger"
                                link = "#collapseOne"
                                title = "High severity warnings"
                                id = "collapseOne"
                                body = "Warning message here !!"
                                />
                                <br></br>
                                <WarningCard
                                classname = "card bg-warning"
                                link = "#collapseTwo"
                                title = "Medium severity warnings"
                                id = "collapseTwo"
                                body = "Warning message here !!"
                                />
                                <br></br>
                                <WarningCard
                                classname = "card bg-info"
                                link = "#collapseThree"
                                title = "Low severity warnings"
                                id = "collapseThree"
                                body = "Warning message here !!"
                                />

                            </div>
                            </div>
                    <div className="container-fluid" style={{width:"auto", height:"auto", marginTop:"10px", marginBottom:"30px", overflowX:"auto", padding:"0px"}}>
                    <CheckDataTable/>
                    </div>
                </div>
            </div>
            <div className="row" style={{width:"auto", height:"100px", marginTop:"30px", backgroundColor:"#1a2e3f", alignItems:"center"}}>
             <Link to="./data_upload" className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", textAlign:"center", marginLeft:"4%"}}>Back</Link>   
                <Link to="#" className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", marginLeft:"77%"}}>Continue</Link>
            </div>
        </div>
        </>
    );
};
export default CheckData;