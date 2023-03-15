import React from 'react'
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RocketIcon from '@mui/icons-material/Rocket';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    function toggleFunction() {
        const openButton = document.getElementsByClassName("open").item(0);
        const closeButton = document.getElementsByClassName("close").item(0);
        const navBar = document.getElementsByClassName("navBar").item(0);

        if(openButton.classList.contains("toggle")) {
            openButton.classList.remove("toggle");
            closeButton.classList.add("toggle");
            navBar.style.display = "none";
        } else {
            closeButton.classList.remove("toggle");
            openButton.classList.add("toggle");
            navBar.style.display = "flex";
        }
    }

    return (
        <header className="header">
            <div className="headerInfo f_flex">
                <div className="infoSplit f_flex">
                    <ul className="link f_flex uppercase headerInfo_child">
                        <li><a href="#home" className="center_align"><HomeIcon className="topbar_icon" />Home</a></li>
                        <li><a href="#about" className="center_align"><PersonIcon className="topbar_icon" />About us</a></li>
                        <li><a href="#checkout" className="center_align"><CheckIcon className="topbar_icon" />Checkout</a></li>
                    </ul>
                </div>
                <div className="infoSplit f_flex">
                    <ul className="link f_flex uppercase">
                        <li><a href="#wishlist" className="center_align"><FavoriteIcon className="topbar_icon" />Wishlist</a></li>
                        <li><a href="#language" className="center_align"><EmojiFlagsIcon className="topbar_icon" /> Flag</a></li> {/* Modifications required */}
                        <li><a href="#phone" className="center_align"><PhoneIcon className="topbar_icon" />999-222-333</a></li>
                    </ul>
                </div>
            </div>
            <div className="headerTitle f_flex">
                <div className="infoSplit f_flex title_end">
                    <ul className="link f_flex uppercase">
                        <li><a href="#facebook"><FacebookIcon /></a></li>
                        <li><a href="#twitter"><TwitterIcon /></a></li>
                        <li><a href="#gplus"><GoogleIcon /></a></li>
                    </ul>
                </div>
                <div className="infoSplit f_flex title_main">
                    <ul className="link uppercase mainTitle">
                        <li>MARINO</li>
                    </ul>
                </div>
                <div className="infoSplit f_flex title_end">
                    <ul className="link f_flex uppercase">
                        <li><a href="#login">Login/Register</a></li>
                        <li><a href="#cart"><LocalMallIcon /></a></li>
                        <li><a href="#rocket"><RocketIcon /></a></li>
                        <li><a href="#searc"><SearchIcon /></a></li>
                    </ul>
                </div>
            </div>
            <div className="container d_flex">
                <div className="navBar">
                    <ul className="link f_flex uppercase">
                        <li><a href="#women">Women</a></li>
                        <li><a href="#men">Men</a></li>
                        <li><a href="#gifts">Gifts</a></li>
                        <li><a href="#girls">Girls</a></li>
                        <li><a href="#boys">Boys</a></li>
                        <li><a href="#wedding">Wedding</a></li>
                        <li><a href="#sale">Sale</a></li>
                        <li><a href="#newArrivals">New Arrivals</a></li>
                        <li><a href="#findStore">Find A Store</a></li>
                    </ul>
                </div>
                <div className="mobile_navLinks_btn">
                    <MenuIcon className="open" onClick={toggleFunction}/>
                    <CloseIcon className="close toggle" onClick={toggleFunction}/>
                </div>
            </div>
        </header>
    )
}

export default Header;