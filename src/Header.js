import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
//import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AppsIcon from '@mui/icons-material/Apps';
//import Avatar from '@mui/icons-material/Avatar'; // Replace './Avatar' with the correct path to the Avatar component

function Header() {
    return(
        <div className="header">
           <div className="header_left">
            <MenuIcon/>
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644" alt="youtube logo"></img>
            </div>
            <div className="header_middle">
                <input className="header_input" placeholder="Search" type="text"></input> 
                    <SearchIcon className="header__inputbutton"/>
                <MicIcon className="header_mic"/>
            </div>
            
               
            
            <div className="header_right">
            <VideoCallIcon className="header_icon"/>
            <NotificationsNoneIcon className="header_icon"/> 
            <AppsIcon className="header_icon"/>
            </div>


        </div>


    );

}
export default Header;