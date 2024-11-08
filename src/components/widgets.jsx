import React from 'react';
import './Widgets.scss';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ScoreboardTwoToneIcon from '@mui/icons-material/ScoreboardTwoTone';
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';

const Widgetsv = ({ type = "user" }) => {
    // Default type is "user"
    let data;
    const amount = 100;
    const diff = 20;
    
    switch(type) {
        case "user":
            data = {
                title: "Total Teams",
                link: "See all users",
                icon: <PersonOutlineTwoToneIcon className="icon" />
            };
            break;
        case "round":
            data = {
                title: "Current Rounds",
                link: "See all Top Rankers",
                icon: <ScoreboardTwoToneIcon className="icon" style={{ backgroundColor: 'rgb(101, 39, 71)', color: "white" }} />
            };
            break;
        case "team":
            data = {
                title: "Active Teams",
                link: "See all Teams",
                icon: <QuizTwoToneIcon className="icon" style={{ backgroundColor: 'rgb(27, 26, 94)', color: "white" }} />
            };
            break;
        case "Feedback":
            data = {
                title: "Feedback",
                link: "See all recent Feedback",
                icon: <AnnouncementTwoToneIcon className="icon" style={{ backgroundColor: 'rgb(102, 22, 125)', color: "white" }} />
            };
            break;
        default:
            console.warn(`Unrecognized widget type: ${type}`);
            data = {
                title: "Unknown",
                link: "No link available",
                icon: <div className="icon">?</div>
            };
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}</span>
                {/* <span className="link">{data.link}</span> */}
            </div>
            <div className="right">
                <div className="percentage positive">
                    {/* <KeyboardArrowUpTwoToneIcon />
                    {diff}% */}
                </div>
                
            </div>
        </div>
    );
};

export default Widgetsv;
