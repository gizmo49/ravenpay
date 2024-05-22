import React from "react";
import { NavLink } from "react-router-dom";

const headerNavigation = [
    {
        title: "Exchange",
        path: "/"
    },
    {
        title: "Wallets",
        path: "/wallets"
    },
    {
        title: "Roqqu Hub",
        path: "/roqqu-hub"
    }
]

const HeaderNavs = ({ showByDefault }) => {

    return (
        <div className={`d-none d-lg-block ${showByDefault ? '' : 'collapse navbar-collapse'}`} id={showByDefault ? 'generalBar' : 'mynavbar'}>
            <ul className='navbar-nav'>
                {headerNavigation.map((item, index) => {
                    return (
                        <li
                            className={`nav-item`}
                            key={index}
                        >
                            <NavLink className='nav-link' to={item.path} key={index}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default HeaderNavs;
