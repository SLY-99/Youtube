import React from 'react';
import '../Sidebar/sidebar.scss';
import Home from "../../Assets/Images/Icons/home-icon.svg";
import Trending from "../../Assets/Images/Icons/trending-icon.svg";
import Subscription from "../../Assets/Images/Icons/subscription-icon.svg";
import Library from "../../Assets/Images/Icons/library-icon.svg";
import History from "../../Assets/Images/Icons/history-icon.svg";
import Watch from "../../Assets/Images/Icons/watch-later.svg";
import Favourite from "../../Assets/Images/Icons/favourite-icon.svg";
import Heart from "../../Assets/Images/Icons/heart-icon.svg";
import Music from "../../Assets/Images/Icons/music-icon.svg";
import Games from "../../Assets/Images/Icons/games-icon.svg";
import Down from "../../Assets/Images/Icons/chevron-down.svg";
import Settings from "../../Assets/Images/Icons/settings.svg";
import Gussie from "../../Assets/Images/img-gussie.png";
import Nora from "../../Assets/Images/img-nora.png";
import Belle from "../../Assets/Images/img-belle.png";
import Eunice from "../../Assets/Images/img-eunice.png";
import Emma from "../../Assets/Images/img-emma.png";
import Leah from "../../Assets/Images/img-liah.png";
import {NavLink} from "react-router-dom";

function App() {
  return (
    <>
    <div className='sidebar__wrapper'>
        <nav className='sidebar__navigation'>
        <ul className='sidebar__list'>
            <li className='sidebar__item'>
                <NavLink to={"/home"} className='sidebar__link-red'>Home</NavLink>
                <img className='sidebar__img-red' src={Home} alt="Home" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Trending</p>
                <img className='sidebar__img' src={Trending} alt="Trending" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Subscriptions</p>
                <img className='sidebar__img' src={Subscription} alt="Subscription" /></li>
        </ul>
        <ul className='sidebar__list2'>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Library</p>
                <img className='sidebar__img' src={Library} alt="Library" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>History</p>
                <img className='sidebar__img' src={History} alt="History" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Watch later</p>
                <img className='sidebar__img' src={Watch} alt="Watch" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Favourites</p>
                <img className='sidebar__img' src={Favourite} alt="Favourite" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Liked Videos</p>
                <img className='sidebar__img' src={Heart} alt="Heart" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Music</p>
                <img className='sidebar__img' src={Music} alt="Music" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Games</p>
                <img className='sidebar__img' src={Games} alt="Games" /></li>
            <li className='sidebar__item'>
                <p className='sidebar__link'>Show more</p>
                <img className='sidebar__down' src={Down} alt="Down" /></li>
        </ul>
        </nav>
        <div>
        <ul className='sidebar__list3'>
            <li>
            <p className='sidebar__text'>Subscriptions</p>
            </li>
            <li className='sidebar__item2'>
                <NavLink to={"/channel"} className='sidebar__link'>Gussie Singleton</NavLink>
                <NavLink to={"/channel"}><img className='sidebar__img2' src={Gussie} alt="Gussie" /></NavLink>
                </li>
            <li className='sidebar__item2'>
                <NavLink to={"/channel"} className='sidebar__link'>Nora Francis</NavLink>
                <NavLink to={"/channel"}><img className='sidebar__img2' src={Nora} alt="Nora" /></NavLink>
                </li>
            <li className='sidebar__item2'>
                <NavLink to={"/channel"} className='sidebar__link'>Belle Briggs</NavLink>
                <NavLink to={"/channel"}><img className='sidebar__img2' src={Belle} alt="Belle" /></NavLink>
                </li>
            <li className='sidebar__item2'>
                <NavLink to={"/channel"} className='sidebar__link'>Eunice Cortez</NavLink>
                <NavLink to={"/channel"}><img className='sidebar__img2' src={Eunice} alt="Eunice" /></NavLink>
                </li>
            <li className='sidebar__item2'>
                <NavLink to={"/channel"} className='sidebar__link'>Emma Hanson</NavLink>
                <NavLink to={"/channel"}><img className='sidebar__img2' src={Emma} alt="Emma" /></NavLink>
                </li>
            <li className='sidebar__item2'>
                <NavLink to={"/channel"} className='sidebar__link'>Leah Berry</NavLink>
                <NavLink to={"/channel"}><img className='sidebar__img2' src={Leah} alt="Leah" /></NavLink>
                </li>
            <li className='sidebar__setting'>
                <NavLink to={"/channel"} className='sidebar__link'>Setting</NavLink>
                <NavLink to={"/channel"}><img className='sidebar__img2' src={Settings} alt="Settings" /></NavLink>
                </li>
          </ul>
        </div>
    </div>
    </>
  );
}

export default App;