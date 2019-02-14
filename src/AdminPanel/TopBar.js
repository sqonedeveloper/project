import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class TopBar extends Component {
   render() {
      return (
         <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
               <div className="navbar-header">
                  <a className="navbar-brand">
                     <LazyLoadImage
                        src="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/logo-light-icon.png"
                        className="light-logo"
                        delayTime="300"
                        placeholderSrc={window.baseUrl + 'assets/img/avatar.png'}
                        effect="blur"
                        threshold="100"
                     />
                  </a>
               </div>
               <div className="navbar-collapse">
                  <ul className="navbar-nav mr-auto mt-md-0">
                     <li className="nav-item">
                        <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)">
                           <i className="mdi mdi-menu" />
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)">
                           <i className="ti-menu" />
                        </a>
                     </li>
                  </ul>
                  <ul className="navbar-nav my-lg-0">
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <img
                              src="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/users/1.jpg"
                              className="profile-pic"
                           />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right scale-up">
                           <ul className="dropdown-user">
                              <li>
                                 <div className="dw-user-box">
                                    <div className="u-img">
                                       <img
                                          src="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/users/1.jpg"
                                          alt="user"
                                       />
                                    </div>
                                    <div className="u-text">
                                       <h4>Steave Jobs</h4>
                                       <p className="text-muted">
                                          varun@gmail.com
                                       </p>
                                       <a href="profile.html" className="btn btn-rounded btn-danger btn-sm">
                                          View Profile
                                       </a>
                                    </div>
                                 </div>
                              </li>
                              <li role="separator" className="divider" />
                              <li>
                                 <a href="#">
                                    <i className="ti-user" /> My Profile
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="ti-wallet" /> My Balance
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="ti-email" /> Inbox
                                 </a>
                              </li>
                              <li role="separator" className="divider" />
                              <li>
                                 <a href="#">
                                    <i className="ti-settings" /> Account
                                    Setting
                                 </a>
                              </li>
                              <li role="separator" className="divider" />
                              <li>
                                 <a href="#">
                                    <i className="fa fa-power-off" /> Logout
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
         </header>
      );
   }
}
