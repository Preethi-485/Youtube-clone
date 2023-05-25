import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar(){
    return(
        <div className="Sidebar">
           <SidebarRow  Icon={HomeIcon} title="Home"/>
           <SidebarRow  selected Icon={SubscriptionsSharpIcon} title="Trending"/>
           <SidebarRow  Icon={WhatshotIcon} title="Subscription"/>
           <hr></hr>
           <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
           <SidebarRow Icon={HistoryIcon} title="History"/>
           <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
           <SidebarRow Icon={AccessTimeIcon} title="Watch Later"/>
           <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos"/>
           <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
           <hr/>
        </div>
    );

}
export default Sidebar;
