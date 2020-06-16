import React from "react";
import Navbar from "../components/Navbar";
import LogoutButton from "../components/LogoutButton";
import UploadTopBar from "../components/UploadTopBar";
import CheckDataTable from "../components/CheckDataTable";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import WarningCard from "../components/WarningCard";
import Footer from "../components/Footer";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

import "./CheckData.css";
import { connect } from "react-redux";

let head1 = "Upload workforce data for Faethm";
let head2 = "USER DATA TABLE";

class CheckData extends React.Component {
  render() {
    // console.log(this.props.rows[0]);
    // console.log(this.props.rows[1]);
    // console.log(this.props.rows[2]);

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1" style={{ marginRight: "6%" }}>
              <Navbar />
            </div>
            <div className="col-10">
              <div className="container-fluid" style={{ height: "80px" }}>
                <LogoutButton />
              </div>
              <div className="container-fluid" style={{ marginBottom: "40px" }}>
                <h1>{head1}</h1>
              </div>
              <UploadTopBar
                imagesrc1="./images/tick.png"
                imagesrc2="./images/tick.png"
                imagesrc3="./images/3a.png"
                imagesrc4="./images/4b.png"
                imagesrc5="./images/5b.png"
              />
              <h2>{head2}</h2>
              <div className="container-fluid">
                <div id="accordion">
                  <WarningCard
                    classname="card bg-danger"
                    link="#collapseOne"
                    title="High severity warnings"
                    id="collapseOne"
                    body="Warning message here !!"
                  />
                  <br></br>
                  <WarningCard
                    classname="card bg-warning"
                    link="#collapseTwo"
                    title="Medium severity warnings"
                    id="collapseTwo"
                    body="Warning message here !!"
                  />
                  <br></br>
                  <WarningCard
                    classname="card bg-info"
                    link="#collapseThree"
                    title="Low severity warnings"
                    id="collapseThree"
                    body="Warning message here !!"
                  />
                </div>
              </div>
              <div
                className="container-fluid"
                style={{
                  marginTop: "10px",
                  marginBottom: "30px",
                  overflowX: "auto",
                  padding: "0px",
                }}
              >
                {/* <CheckDataTable /> */}
              </div>
            </div>
          </div>
          <div>
            <div
              className="container-fluid"
              style={{
                height: "600px",
                width: "auto",
                marginLeft: "-20px",
                marginTop: "50px",
                overflowX: "scroll",
                overflowY: "scroll",
              }}
            >
              <OutTable
                data={this.props.rows}
                columns={this.props.cols}
                tableClassName="ExcelTable2007"
                tableHeaderRowClass="heading"
              />
              {alert("Your file has been uploaded and ready to show")}
            </div>
          </div>
          <Footer backlink="/data_upload" contlink="/check_data" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rows: state.data ? state.data.rows : [],
    cols: state.data ? state.data.cols : [],
  };
};
export default connect(mapStateToProps, null)(CheckData);
