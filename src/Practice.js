import React from "react";
import Navbar from "./components/Navbar";
import LogoutButton from "./components/LogoutButton";
import UploadTopBar from "./components/UploadTopBar";
import Footer from "./components/Footer";
import UploadFile from "./UploadFile";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const head1 = "Upload workforce data for Faethm"

const DataUpload = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-1" style={{ marginRight:"6%"}}>
                    <Navbar/>
                </div>
                <div className="col-10">
                    <div className="container-fluid" style={{height:"80px"}}>
                        <LogoutButton/>
                    </div>
                    <div className="container-fluid" style={{marginBottom:"40px"}}>
                        <h1>{head1}</h1>
                    </div>
                    <UploadTopBar
                      imagesrc1 ="./images/tick.png"
                      imagesrc2 ="./images/2a.png"
                      imagesrc3 ="./images/3b.png"
                      imagesrc4 ="./images/4b.png"
                      imagesrc5 ="./images/5b.png"
                    />
                    
                    <UploadFile/> 

                 </div>
                
            </div>
            <Footer
            backlink = "/data_requirement"
            contlink = "/check_data"
            />
        </div>
        </>
    );
};
export default DataUpload;