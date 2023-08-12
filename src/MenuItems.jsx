import data from "./data.js";
import { useState } from "react";
import MenuItem from "./MenuItem.jsx";

const MenuItems = ({menuItems}) => {
    return (
        <ul className='section-center'>
        {menuItems.map((item) => {
            return <MenuItem key={item.id} {...item} />;
        })}
        </ul>
    );
}

export default MenuItems;