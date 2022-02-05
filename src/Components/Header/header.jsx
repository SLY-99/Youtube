import '../Header/header.scss';
import Burger from "../../Assets/Images/Icons/burger-icon.svg";
import Logo from "../../Assets/Images/logo.svg";
import Videoplayer from "../../Assets/Images/Icons/videoplayer-icon.svg";
import Apps from "../../Assets/Images/Icons/apps-icon.svg";
import Notification from "../../Assets/Images/Icons/notification-icon.svg";
import Userpic from "../../Assets/Images/Userpic.png";
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
    <div className='header__wrapper'>
        <div className='header__box'>
            <img className='header__burger' src={Burger} alt="burger" />
            <Link to={"/home"}><img className='header__logo' src={Logo} alt="logo" /></Link>
            <input className='header__input' type="search" placeholder='Search'/>
        </div>
        <ul className='header__list'>
            <li className='header__item'>
                <img className='header__img' src={Videoplayer} alt="Videoplayer" />
            </li>
            <li className='header__item'>
                <img className='header__img' src={Apps} alt="Apps" />
            </li>
            <li className='header__item'>
                <img className='header__img' src={Notification} alt="Notification" />
            </li>
            <li>
                <img className='header__userpic' src={Userpic} alt="Userpic" />
            </li>
        </ul>
        <span className='header__span'>3</span>
    </div>
    </>
  );
}

export default Header;