import React from 'react';
import './menu-bar.css';
import open from '../ImageResources/open.png';
import MenuBarItems from "../menu-bar-items/menu-bar-items";

const MenuBar=({arr})=>{

    const menu = arr.map((item)=>{
        const {index} = item;

        if(item.content === undefined){
            return (<li key={index}>
                <img src={open} alt="error"/>
                {item.title}
            </li>);
        }
        else {
            return (<li key={index}>
                <img src={open} alt="error"/>
                {item.title}
                <MenuBarItems arr={item.content}/>
            </li>);
        }

    });

    return(
        <ul>
            {menu}
        </ul>
    );
};

export default MenuBar;