import React from 'react';
import Sidebar from './Sidebar';
import Adminheader from './Adminheader';
import '../../Style/dashboard.css';

const Dashboard = ({ children }) => {
    return (
        <div className='dashboard'>
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>
            <div className='main-content'>
                <Adminheader></Adminheader>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Dashboard;