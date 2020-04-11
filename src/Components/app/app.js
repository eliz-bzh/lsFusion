import React from 'react';
import './app.css';
import MenuBar from "../menu-bar/menu-bar";
import {desktop, directories, headerButtons} from "../menu-bar-lists";
import Columns from "../columns/columns";
import HeaderButton from "../header-button/header-button";


const App=()=>{

    return(
        <div className="text-style">
            <div className="horizontalToolbar elemOnlyHor">
                <HeaderButton data={headerButtons}/>
            </div>
            <hr className="hrStyleVer"/>
            <Columns left={<MenuBar arr={desktop}/>}
                     right={<MenuBar arr={directories}/>}/>
        </div>
    );
};

export default App;