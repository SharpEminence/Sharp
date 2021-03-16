import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AdminLayout from '../admin_Layout'

// import M from "materialize-css";
const AdminDashboard = () => {
  const history = useHistory();
  




  return (
    <div>
      <AdminLayout>
     
     <h1>Welcome TO AdminDashboard </h1>     
     </AdminLayout>
    </div>
 
 );
};

export default AdminDashboard;
