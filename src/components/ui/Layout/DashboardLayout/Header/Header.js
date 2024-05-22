import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { imageLinks } from "assets/images";
import HeaderNavs from "./HeaderNavs/HeaderNavs";
import ProfileToggle from "./ProfileToggle/ProfileToggle";
import "./Header.scss";


const Header = () => {

    return (
        <header id="topHeader">
            <div className="mint-container">
                <nav className="navbar">
                    <Link
                        className='navbar-brand'
                        to='/'>
                        <ReactSVG src={imageLinks?.images?.logo} />
                    </Link>

                    <HeaderNavs showByDefault />

                    <ul className="end__nav d-none d-lg-flex ">
                    <li>
                        <ProfileToggle />
                    </li>
                        <li>
                            <Link
                                className='cta__link inverse'
                                to={{
                                    pathname: "/",
                                }}
                            >
                                <ReactSVG src={imageLinks?.icons?.globe} />

                            </Link>
                        </li>
                        <li>
                            <Link
                                className='cta__link'
                                to={{
                                    pathname: "/",
                                }}
                            >
                                <ReactSVG src={imageLinks?.icons?.logout} />
                            </Link>
                        </li>


                    </ul>

                    <Link className="nav__avatar d-md-none" to='/me'>
                        <img src="https://source.unsplash.com/random/200x200/?girl+avatar" alt="avatar" />
                    </Link>
                </nav>
            </div>
            {/* <HomeBanner /> */}
        </header>
    );
};

export default Header;
