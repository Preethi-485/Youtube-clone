import React from 'react';
import "./Rv.css";
import VideoCard from "./VideoCard.js";


function Rv(){
    return(
        <div className="Rv">
            <h1>Recommended</h1>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    );
}
export default Rv;