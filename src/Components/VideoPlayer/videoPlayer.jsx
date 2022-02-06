import React from 'react';
import '../VideoPlayer/videoPlayer.scss';
import Like from "../../Assets/Images/Icons/like-icon.svg";
import DisLike from "../../Assets/Images/Icons/dislike-icon.svg";
import Share from "../../Assets/Images/Icons/share-icon.svg";
import More from "../../Assets/Images/Icons/More.svg";
import Bar from "../../Assets/Images/Icons/ProgressBar.svg";
import Pause from "../../Assets/Images/Icons/pause.svg";
import Next from "../../Assets/Images/Icons/next.svg";
import Volume from "../../Assets/Images/Icons/Volume.svg";
import Subtitles from "../../Assets/Images/Icons/subtitles.svg";
import Settings from "../../Assets/Images/Icons/settings.svg";
import Size from "../../Assets/Images/Icons/size.svg";
import FullScreen from "../../Assets/Images/Icons/full-screen.svg";
import FoodDrink from "../../Assets/Images/food-drink.png";
import VideosImg from "../../Assets/Images/Video.png";
import {useParams ,Link} from "react-router-dom";

function App() {

    const { id } = useParams();
    const [images, setImages] = React.useState({});

    React.useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setImages(data);
        });
    }, [id]);


  return (
    <>
    <div className='videoPlayer__wrapper'>
        <div className='videoPlayer__videoBox'>
            <img className='videoPlayer__img' src={images.url? images.url : VideosImg} alt="img" />

            <div className='videoPlayer__playerBox'>
                <div className='videoPlayer__textBox'>
                    <p className='videoPlayer__time'>1:34</p>
                    <p className='videoPlayer__time'>19:00</p>
                </div>
                <img className='videoPlayer__bar' src={Bar} alt="Bar" />
                <div className='videoPlayer__iconBox'>
                    <div className='videoPlayer__miniBox'>
                        <img className='videoPlayer__icons' src={Pause} alt="Pause" />
                        <img className='videoPlayer__icons' src={Next} alt="Next" />
                        <img className='videoPlayer__icons' src={Volume} alt="Volume" />
                    </div>
                    <div className='videoPlayer__miniBox'>
                        <img className='videoPlayer__icons2' src={Subtitles} alt="Subtitles" />
                        <img className='videoPlayer__icons2' src={Settings} alt="Settings" />
                        <img className='videoPlayer__icons2' src={Size} alt="Size" />
                        <img className='videoPlayer__icons2' src={FullScreen} alt="FullScreen" />
                    </div>
                </div>
            </div>
        </div>

        <div className='videoPlayer__wrapper2'>
            <h2 className='videoPlayer__title'>Dude You Re Getting A Telescope</h2>
            <div className='videoPlayer__box'>
                <p className='videoPlayer__text'>123k views</p>
                <ul className='videoPlayer__list'>
                    <li className='videoPlayer__item'><img className='videoPlayer__image' src={Like} alt="like" />123K</li>
                    <li className='videoPlayer__item'><img className='videoPlayer__image' src={DisLike} alt="dislike" />435K</li>
                    <li className='videoPlayer__item'><img className='videoPlayer__image' src={Share} alt="share" />Share</li>
                    <li><img className='videoPlayer__dot' src={More} alt="more" /></li>
                </ul>
            </div>
        </div>

        <div className='videoPlayer__wrapper3'>
          <Link to={"/channel"} className="videoPlayer__navLink">
            <img className='videoPlayer__photo' src={FoodDrink} alt="FoodDrink" />
          </Link>
            <div className='videoPlayer__box2'>
              <div className='videoPlayer__text-box'>
                <Link to={"/channel"} className="videoPlayer__navLink">
                    <p className='videoPlayer__title2'>Food & Drink</p>
                </Link>
                    <p className='videoPlayer__text2'>Published on 14 Jun 2019</p>
                 <div>
                  <p className='videoPlayer__text'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                  <p className='videoPlayer__link'>Show more</p>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;