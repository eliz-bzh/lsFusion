import React from 'react';
import './app.css';
import Header from '../header/header';
import MenuBar from "../menu-bar/menu-bar";
import {desktop, directories} from "../menu-bar-lists";


const App=()=>{

    return(
        <div className="text-style">
            <div className="horizontalToolbar elemOnlyHor">
                <Header/>
            </div>
            <hr className="hrStyleVer"/>
            <div>
                <MenuBar arr={desktop}/>
            </div>
        </div>
    );
};

export default App;