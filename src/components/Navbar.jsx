import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#1e1e1e] text-gray-300 p-1 flex flex-wrap items-center justify-between text-xs sm:text-sm font-mono">
            <div className="flex items-center space-x-2 sm:space-x-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-1 sm:px-2 py-0.5 hover:bg-[#2d2d2d] ${isActive ? 'bg-[#2d2d2d]' : ''
                        }`
                    }
                >
                    [Home]
                </NavLink>
                <NavLink
                    to="/keeper"
                    className={({ isActive }) =>
                        `px-1 sm:px-2 py-0.5 hover:bg-[#2d2d2d] ${isActive ? 'bg-[#2d2d2d]' : ''
                        }`
                    }
                >
                    [Keeper]
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;