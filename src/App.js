import React from"react";
import './App.css';
import Header from "./Header";
import Sidebar from"./Sidebar";
import Rv from "./Rv";

function App() {
  return (
    <div className="app">
              <Header/> 
              <div className="app_page">
                <Sidebar/>
                <Rv/>
              </div>

        {/*Header - it should stick to top when scrolling*/}
        {/*Sidebar*/}
        {/*Recommended section*/}
    </div>
  );
}



export default App;
