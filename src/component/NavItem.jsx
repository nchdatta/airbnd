import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => {
    return (
        <NavLink to={to} className="block py-2 font-semibold text-gray-700 dark:text-gray-400 dark:hover:text-white">{children}</NavLink>
    );
};

export default NavItem;