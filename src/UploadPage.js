import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import LogoutButton from "./components/LogoutButton";
import UploadTopBar from "./components/UploadTopBar";
import TableUploadPage from "./components/TableUploadPage";
import {Link} from "react-router-dom";

let head1 = "Upload workforce data for Faethm";
let para1 = "The Faethm prediction algorithm works best when assessing a complete and accurate dataset. * denotes a mandatory field, the additional information requested in the template will assist in providing deeper insights when reviewing your results. Example data is shown below, hover over the columns to learn the format before continuing.";
let head2 = "Download formatting instructions"
let para2 = "Save the formatting instructions for your reference by downloading this PDF.";



const UploadPage = () => {
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
                      imagesrc1 ="./images/1a.png"
                      imagesrc2 ="./images/2b.png"
                      imagesrc3 ="./images/3b.png"
                      imagesrc4 ="./images/4b.png"
                      imagesrc5 ="./images/5b.png"
                    />
                    <div className="container-fluid mx-0" style={{display:"flex",flexWrap:"wrap", padding:"0px"}}>
                        <div className="container-fluid mx-0"style={{width:"62%", height:"auto", marginTop:"60px"}}>
                            <p style={{color:"white"}}>{para1}</p>  
                            <button className="btn btn-primary">Download data template</button>
                        </div>
                        <div className="container-fluid"style={{width:"38%", height:"auto", marginTop:"60px", backgroundColor:"#1b3e4e", padding:"10px"}}>
                            <p style={{color:"white", fontSize:"18px"}}>{head2}</p>
                            <p  style={{color:"white"}}>{para2}</p>
                            <button type="button" class="btn btn-outline-info btn-block">Download PDF instructions</button>
                        </div>
                    </div>
   
                <TableUploadPage/>
    
  
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
export default UploadPage;