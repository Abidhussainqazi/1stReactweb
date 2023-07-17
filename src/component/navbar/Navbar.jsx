import React, { useState, useEffect } from 'react';
import './navbar.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Search from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <div className="search-icon">
                        <Search className="icon" />
                    </div>
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                        src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/02/KD-2018-Good-or-Not-DPS-2.jpg?resize=750%2C500&ssl=1"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <span>Setting</span>
                            <span>LogOut</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
