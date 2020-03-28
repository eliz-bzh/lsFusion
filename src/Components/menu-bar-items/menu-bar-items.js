import React from "react";
import './menu-bar-items.css';
import form from '../ImageResources/form.png';

const MenuBarItems=({arr})=>{

    const elements = arr.map((item)=>{

        const tag = <span>
                <img src={form} alt="error"/>
            {item}
            </span>;

        const {index} = item;

        return (
            <li key={index}>
                {tag}
            </li>
        );

    });

    return(
        <ul>
            {elements}
        </ul>
    );
};

export default MenuBarItems;