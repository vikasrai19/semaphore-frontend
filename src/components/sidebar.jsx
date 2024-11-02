import React from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

const Sidebar = () => {
  return (
    <aside className="w-1/6 h-screen bg-gray-200 p-4 flex flex-col"> 
      <h1 className="text-2xl font-bold mb-8 font-dosisBold">2k24</h1>
      <nav className="space-y-6 flex-1">
        <a href="#dashboard" className="flex items-center space-x-3 hover:text-gray-600">
          <DashboardOutlinedIcon className="w-6 h-6" />
          <span className="text-lg font-medium font-dosisRegular">Dashboard</span>
        </a>
        <a href="#event-details" className="flex items-center space-x-3 hover:text-gray-600">
          <EventOutlinedIcon className="w-6 h-6" />
          <span className="text-lg font-medium font-dosisRegular">Event Details</span>
        </a>
        <a href="#update-scores" className="flex items-center space-x-3 hover:text-gray-600">
          <CreditScoreOutlinedIcon className="w-6 h-6" />
          <span className="text-lg font-medium font-dosisRegular">Update Scores</span>
        </a>
        <a href="#rankings" className="flex items-center space-x-3 hover:text-gray-600">
          <MilitaryTechOutlinedIcon className="w-6 h-6" />
          <span className="text-lg font-medium font-dosisRegular">Rankings</span>
        </a>
        <a href="#registrations" className="flex items-center space-x-3 hover:text-gray-600">
          <AppRegistrationOutlinedIcon className="w-6 h-6" />
          <span className="text-lg font-medium font-dosisRegular">Registrations</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
