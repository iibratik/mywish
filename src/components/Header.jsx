import React from 'react';
import logo from '../assets/images/logo.png';
import burgerImg from "../assets/svg/bars.svg"
const Header = () => {
    const menu = [
        {
            id: 1,
            name: "Войти",
            link: '#'
        },
        {
            id: 2,
            name: "Желания",
            link: '#'
        },
        {
            id: 3,
            name: "Подарки",
            link: '#'
        },
        {
            id: 4,
            name: "Главная",
            link: '#'
        },
    ];
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <a href="">
                            <img src={logo} alt="" className="logo" />
                        </a>
                    </div>
                    <ul className="navbar-menu">
                        {menu.map(menuObj => (
                            <li key={menuObj.id}>
                                <a className='navbar-menu__link' href={menuObj.link}>{menuObj.name}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="burger-btn">
                        <img src={burgerImg} alt="" />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;