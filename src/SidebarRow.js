import React from 'react';
import "./SidebarRow.css";

function SidebarRow({selected, Icon, title}){ /*if we don't capitalise this Icon, it doen't work*/
    return(
        <div className={`SidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
            <h3 className="sidebarRow_title">{title}</h3>
         </div>
    );
}
export default SidebarRow;
