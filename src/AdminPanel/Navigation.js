import React, { Component } from "react";

export default class Navigation extends Component {
   render() {
      return (
         <aside className="left-sidebar">
            <div className="scroll-sidebar">
               <nav className="sidebar-nav">
                  <ul id="sidebarnav">
                     <li>
                        <a href="" aria-expanded="false">
                           <i className="mdi mdi-gauge" />
                           <span className="hide-menu">Dashboard</span>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </aside>
      );
   }
}
