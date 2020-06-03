import React from "react";
import Navbar from "./Navbar";
import LogoutButton from "./LogoutButton";
import UploadTopBar from "./UploadTopBar";
import {Link} from "react-router-dom";
import "./App.css";
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
                <div className="col-10 border">
                    <div className="container-fluid" style={{width:"auto", height:"80px"}}>
                        <LogoutButton/>
                    </div>
                    <div className="container-fluid" style={{width:"auto", height:"auto", marginBottom:"40px"}}>
                        <h1 style={{color:"white", fontSize:"28px"}}>{head1}</h1>
                    </div>
                    <UploadTopBar
                      imagesrc1 ="./tick.png"
                      imagesrc2 ="./tick.png"
                      imagesrc3 ="./3a.png"
                      imagesrc4 ="./4b.png"
                      imagesrc5 ="./5b.png"
                    />
                    <h1 style={{color:"white", fontSize:"18px", marginTop:"30px"}}>{head2}</h1>
                    <div className="container-fluid bordered" style={{width:"auto", height:"200px", marginTop:"10px", marginBottom:"30px", overflowY:"auto", overflowX:"auto"}}>
                        <table className="table table-bordered" style={{width: "auto", height:"200px", color:"white"}}>
                            <thead className="thead" style={{fontWeight:"normal"}}>
                                <tr>
                                    <th>ID</th>
                                    <th>FTE&nbsp;*</th>
                                    <th>JOB&nbsp;NAME&nbsp;*</th>
                                    <th>TOTAL&nbsp;COMPENSATION&nbsp;*</th>
                                    <th>EMPLOYEE&nbsp;TYPE</th>
                                    <th>GENDER</th>
                                    <th>BIRTH&nbsp;YEAR</th>
                                    <th>JOB&nbsp;DESCRIPTION</th>
                                    <th>JOB&nbsp;FAMILY</th>
                                    <th>EMPLOYEE&nbsp;LEVEL</th>  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>272</td>
                                    <td>0.5</td>
                                    <td>Senior project manager</td>
                                    <td>12345</td>
                                    <td>Contract</td>
                                    <td>F</td>
                                    <td>1956</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Product</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>272</td>
                                    <td>0.5</td>
                                    <td>Senior project manager</td>
                                    <td>12345</td>
                                    <td>Contract</td>
                                    <td>F</td>
                                    <td>1956</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Product</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>272</td>
                                    <td>0.5</td>
                                    <td>Senior project manager</td>
                                    <td>12345</td>
                                    <td>Contract</td>
                                    <td>F</td>
                                    <td>1956</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Product</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                            </table>
          
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