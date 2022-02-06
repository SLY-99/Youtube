import React from 'react';
import '../Aside/aside.scss';
import AutoPlay from "../../Assets/Images/Icons/autoplay-icon.svg";
import {NavLink} from "react-router-dom";

function Aside({width , height}) {

    const [images, setImages] = React.useState({});
      const [isLoading, setLoading] = React.useState(true);
  
      React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then((response) => response.json())
          .then((data) => {
                    const photos = data.slice(0,10)
            setImages(photos);
            setLoading(false);
          });
      }, []);
  
  
      if (isLoading) {
        return <h1>Loading ... </h1>;
      } else{
    return (
      <>
      <div className='aside__wrapper'>
          <div className='aside__box'>
            <div className='aside__mini-box'>
              <h4 className='aside__title'>Next</h4>
              <p className='aside__link'>autoplay<img className='aside__img' src={AutoPlay} alt="AutoPlay"/></p>
            </div>
          </div>
          <div className='aside__wrapper2'>
          {images.length > 0 && images.map((photo) => (
                        <React.Fragment key = {photo.id}>
                          <NavLink to={"/player/"+ photo.id} onClick={()=> window.location.href=`/player/${photo.id}`} className="aside__navLink">
                        <div className='aside__box2'>
                          <img className='aside__img2' src={photo.thumbnailUrl} width={width} height={height} alt="img" />
                          <h5 className='aside__title2'>{photo.title}</h5>
                         <div className='aside__text-box'>
                           <p className='aside__text'>123k views</p>
                           <p className='aside__text'>Dollie Blair</p>
                         </div>
                        </div> 
                          </NavLink>
                        </React.Fragment>
                    ))}     
          </div>
      </div>
      </>
     );
    }
  }
  
  export default Aside;