import React from 'react';
import './app.css';
import Header from '../header/header';
import MenuBar from "../menu-bar/menu-bar";
import {desktop, directories} from "../menu-bar-lists";
import Columns from "../columns/columns";


const App=()=>{

    return(
        <div className="text-style">
            <div className="horizontalToolbar elemOnlyHor">
                <Header/>
            </div>
            <hr className="hrStyleVer"/>
            <Columns left={<MenuBar arr={desktop}/>}
                     right={<MenuBar arr={directories}/>}/>
        </div>
    );
};

export default App;