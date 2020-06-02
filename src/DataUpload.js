import React from "react";
import Navbar from "./Navbar";
import LogoutButton from "./LogoutButton";
import UploadTopBar from "./UploadTopBar";
import DragAndDrop from "./DragAndDrop";
import {Link} from "react-router-dom";

let head1 = "Upload workforce data for Faethm"

const DataUpload = () => {
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
                      imagesrc1 ="./tick.png"
                      imagesrc2 ="./2a.png"
                      imagesrc3 ="./3b.png"
                      imagesrc4 ="./4b.png"
                      imagesrc5 ="./5b.png"
                    />
                    <DragAndDrop/>
                </div>
            </div>
            <div className="row" style={{width:"auto", height:"100px", marginTop:"30px", backgroundColor:"#1a2e3f", alignItems:"center"}}>
             <Link to="./" className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", textAlign:"center", marginLeft:"4%"}}>Back</Link>   
                <Link to="./data_upload" className="btn btn-primary" style={{backgroundColor:"#253848", color:"white",width:"100px", height:"40px", marginLeft:"77%"}}>Continue</Link>
            </div>
        </div>
        </>
    );
};
export default DataUpload;