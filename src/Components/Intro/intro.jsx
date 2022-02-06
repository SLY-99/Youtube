import React from 'react';
import '../Intro/intro.scss';
import IntroImg from "../../Assets/Images/intro.png";
import VideoImg from "../../Assets/Images/Video.png";
import Margaret from "../../Assets/Images/img-margaret.png";
import Flora from "../../Assets/Images/img-flora.png";
import Violet from "../../Assets/Images/img-violet.png";
import Philip from "../../Assets/Images/img-philip.png";
import Search from "../../Assets/Images/Icons/search-icon.svg";
import Videos from "../MainVid/videos";
import Button from "../Button/button";
import {NavLink } from "react-router-dom";

function Intro() {
  return (
    <>
    <div className='intro__wrapper'>
        <img className='intro__photo' src={IntroImg} alt="IntroImg" />
        <div className='intro__box'>
            <div className='intro__mini-box'>
             <img className='intro__img' src={Margaret} alt="Margaret" />
             <div className='intro__text-box'>
             <h4 className='intro__title'>Margaret Phelps</h4>
             <p className='intro__text'>245K subscribed</p>
             </div>
            </div>
            <Button/>
        </div>
        <nav>
            <ul className='intro__list'>
                <li className='intro__item'><NavLink to={"/home"} className='intro__link'> <span className='intro__span'>Home</span></NavLink></li>
                <li className='intro__item'><p className='intro__link'>Videos</p></li>
                <li className='intro__item'><p className='intro__link'>Playlists</p></li>
                <li className='intro__item'><p className='intro__link'>Channels</p></li>
                <li className='intro__item'><p className='intro__link'>Discussion</p></li>
                <li className='intro__item'><p className='intro__link'>About</p></li>
                <img src={Search} alt="Search" />
            </ul>
        </nav>
        <div className='intro__box2'>
            <NavLink to={"/player"}>
            <img className='intro__image' src={VideoImg} alt="VideoImg" />
            </NavLink>
            <div className='intro__text-box2'>
            <h4 className='intro__title'>Choosing The Best Audio Player Software For Your Computer</h4>
            <p className='intro__text2'>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
            <p className='intro__text2'>11k views  ·  6 months ago</p>
            </div>
        </div>
        <aside className='intro__aside'>
            <p className='intro__text2'>Recommended channel</p>
            <ul className='intro__list2'>
                <li className='intro__item2'> <p className='intro__link2'><img className='intro__img2' src={Flora} alt="Flora" />Flora Benson</p></li>
                <li className='intro__item2'> <p className='intro__link2'><img className='intro__img2' src={Violet} alt="Violet" />Violet Cobb</p></li>
                <li className='intro__item2'> <p className='intro__link2'><img className='intro__img2' src={Philip} alt="Philip" />Phillip Mullins</p></li>
            </ul>
        </aside>
    </div>

    <Videos title={"Margaret Phelps videos"} width={230} height={130}/>
    </>
  );
}

export default Intro;