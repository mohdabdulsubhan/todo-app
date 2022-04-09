import React from "react";
import { Link } from "react-router-dom";
function index() {
    return (
        <div className='container text-center'>
            <h1>Welcome The Dashboad!</h1>
            <Link to="/todo">Navigate to <span className="font-weight-bold">To Do List</span> </Link>
        </div>
    );
}

export default index;
