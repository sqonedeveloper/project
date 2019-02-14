import React, { Component } from "react";
import { Route } from 'react-router-dom';

import TopBar from "./AdminPanel/TopBar";
import Navigation from "./AdminPanel/Navigation";
import Footer from "./AdminPanel/Footer";

import Dashboard from './AdminPanel/Dashboard';

export default class AdminPanel extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="preloader">
               <svg className="circular" viewBox="25 25 50 50">
                  <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
               </svg>
            </div>
            <div id="main-wrapper">
               <TopBar />
               <Navigation />
               <div class="page-wrapper">
                  <Route exact path={'/adminpanel/dashboard'} component={Dashboard} />
               </div>
               <Footer />
            </div>
         </React.Fragment>
      )
   }
}
