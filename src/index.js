import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AdminPanel from './AdminPanel';

ReactDOM.render(
   <BrowserRouter basename={window.siteUrl}>
      <AdminPanel />
   </BrowserRouter>,
document.getElementById('root'));
