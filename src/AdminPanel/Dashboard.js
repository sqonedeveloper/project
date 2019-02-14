import React, { Component } from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";

export default class Dashboard extends Component {
   render() {
      return (
         <div className="container-fluid">
            <Row className="page-titles">
               <Col md={5} sm={8} className="align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item className="breadcrumb-item" active>Adminpanel</Breadcrumb.Item>
                     <Breadcrumb.Item className="breadcrumb-item" active>Dashboard</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
               <Col md={7} sm={4} className="align-self-center">
                  <div className="d-flex m-t-10 justify-content-end">
                     <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                        <div className="chart-text m-r-10">
                           <h6 className="m-b-0">
                              <small>THIS MONTH</small>
                           </h6>
                           <h4 className="m-t-0 text-info">$58,356</h4>
                        </div>
                        <div className="spark-chart">
                           <div id="monthchart" />
                        </div>
                     </div>
                     <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                        <div className="chart-text m-r-10">
                           <h6 className="m-b-0">
                              <small>LAST MONTH</small>
                           </h6>
                           <h4 className="m-t-0 text-primary">$48,356</h4>
                        </div>
                        <div className="spark-chart">
                           <div id="lastmonthchart" />
                        </div>
                     </div>
                     <div className="">
                        <button className="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10">
                           <i className="ti-settings text-white" />
                        </button>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row>
               <Col md={12} sm={12}>
                  <div className="card">
                     <div className="card-body">
                        <h1>Dashboard Pages</h1>
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
      );
   }
}
