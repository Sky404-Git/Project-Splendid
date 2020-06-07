import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./UploadPage.css";
import Navbar from "../components/Navbar";
import LogoutButton from "../components/LogoutButton";
import UploadTopBar from "../components/UploadTopBar";
import TableUploadPage from "../components/TableUploadPage";
import Footer from "../components/Footer";
import { CSVLink} from "react-csv";

let head1 = "Upload workforce data for Faethm";
let para1 = "The Faethm prediction algorithm works best when assessing a complete and accurate dataset. * denotes a mandatory field, the additional information requested in the template will assist in providing deeper insights when reviewing your results. Example data is shown below, hover over the columns to learn the format before continuing.";
let head2 = "Download formatting instructions"
let para2 = "Save the formatting instructions for your reference by downloading this PDF.";

const csvData = [
    ["role_name", "recommended_title", "role_description","role_family","org_level_1","org_level_2","org_level_3","pred_soc_1","pred_name1","pred_soc_2","pred_name2","pred_soc3","pred_name3","compo_bracket","total_fte","has_reports_ratio","has_mgr_reports_ratio","New Job","Review Required","Selected SOC Code","Selected SOC Name","Description"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];

const UploadPage = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-1">
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
                      imagesrc1 ="./images/1a.png"
                      imagesrc2 ="./images/2b.png"
                      imagesrc3 ="./images/3b.png"
                      imagesrc4 ="./images/4b.png"
                      imagesrc5 ="./images/5b.png"
                    />
                    <div className="container-fluid mx-0" style={{display:"flex",flexWrap:"wrap", padding:"0px"}}>
                        <div className="container-fluid mx-0"style={{width:"62%", marginTop:"60px"}}>
                            <p>{para1}</p>  
                            <CSVLink data={csvData}><button className="btn btn-primary">Download data template</button></CSVLink>
                        </div>
                        <div className="container-fluid" style={{width:"38%", marginTop:"60px", backgroundColor:"#1b3e4e", padding:"10px"}}>
                            <p1>{head2}</p1>
                            <p>{para2}</p>
                            <button type="button" class="btn btn-outline-info btn-block">Download PDF instructions</button>
                        </div>
                    </div>
   
                <TableUploadPage/>
    
  
                </div>
            </div>
            <Footer
                backlink = "/"
                contlink = "/data_upload"
            />
        </div>
        </>
    );
};
export default UploadPage;