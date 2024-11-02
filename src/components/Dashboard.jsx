import React from 'react';
import Sidebar from './sidebar';
import Navibar from './header';
import Widgets from './Widgets';
import './Dashboard.scss';

const Dashboard = () => {
    return (
      <div className="home">
        <Sidebar /> {/* Fixed sidebar */}
        <div className="homeContainer">
          <Navibar /> {/* Navbar should be aligned right next to the sidebar */}
          <div className="widgets">
            <Widgets type="user" />
            <Widgets type="round" />
            <Widgets type="team" />
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
