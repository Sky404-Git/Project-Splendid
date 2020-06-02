import React from 'react';
import Navbar from "./Navbar";
import ToggleButton from "./ToggleButton";
import DataUploadCard from "./DataUploadCard";
import CardData from "./CardData";
import {Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

let head1 = "Welcome to Faethm";
let para1= "Faethm provides clients with workforce automation insights through predictive scenario modelling. These insights can be used alongside company context to inform and enable stratefic workforce and technology implementation decisions.";
let head2 = "DATA UPLOAD OVERVIEW";
let para3 = "Ready to start? Remember you can save and come back to it any time.";
let para4 = "Start data upload process";

const Home = () => {
    return (
        <>
    <div className="container-fluid" style={{display:"flex", flexWrap:"wrap"}}>
    <Navbar/>
    <div className="container-fluid mx-0" style={{width:"55%", height:"auto" }}>
    <h1 style={{color:"white", paddingTop:"50px"}}>{head1}</h1>
    <p style={{color:"white", paddingTop:"10px"}}>{para1}</p>
    </div>
    <ToggleButton/>
    </div>
    <div className="container-fluid" style={{width:"auto", height:"auto", backgroundColor:"none", marginLeft:"15.5%"}}>
    <h1 style={{color:"white", fontSize:"18px"}}>{head2}</h1>
    </div>
    <div className="container-fluid" style={{width:"auto", height:"auto", backgroundColor:"none", marginLeft:"15.5%", display:"flex", flexWrap:"wrap"}}>
    {CardData.map(function ncard(val){
        return (
            <DataUploadCard
                imgsrc = {val.imgsrc}
                head={val.head}
                body = {val.body}
                link = {val.link}
            />
        );
    })}
    </div>
    <div className="container-fluid" style={{width:"auto", height:"200px", backgroundColor:"none", marginLeft:"15.5%", marginTop:"40px"}}>
    <p style={{color:"white", fontSize:"18px"}}>{para3}</p>  
<Link to="./data_requirement" className="btn btn-primary">{para4}</Link>
    </div>
    </>
    );
};
export default Home;