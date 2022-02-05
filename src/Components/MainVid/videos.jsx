import React from 'react';
import '../MainVid/videos.scss';
import Left from "../../Assets/Images/Icons/left.svg";
import Right from "../../Assets/Images/Icons/right.svg";
import {Link } from "react-router-dom";

function Videos({title ,img , text, width , height}) {

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
    <div className='videos__wrapper'>
        <div className='videos__box'>
          <div className='videos__mini-box'>
            <Link to={"/channel"} className="videos__navLink">
            {img && <img src={img} alt="img" />}
            </Link>
            <Link to={"/channel"} className="videos__navLink">
            <h4 className='videos__title'>{title}</h4>
            </Link>
            {text && <p className='videos__rec'>{text}</p>}
          </div>
            <div className='videos__mini-box'>
              <button className='videos__btn'><img src={Left} alt="Left" /></button>
              <button className='videos__btn'><img src={Right} alt="Right" /></button>
            </div>
        </div>
        <div className='videos__wrapper2'>
        {images.length > 0 && images.map((photo) => (
                      <React.Fragment key = {photo.id}>
                        <Link to={"/player/"+photo.id} className="videos__navLink">
                      <div className='videos__box2'>
                        <img className='videos__img2' src={photo.thumbnailUrl} width={width} height={height} alt="img" />
                        <h5 className='videos__title2'>{photo.title}</h5>
                       <div className='videos__text-box'>
                         <p className='videos__text'>80k views  ·  3 days ago</p>
                         <p className='videos__text'>{title}</p>
                       </div>
                      </div> 
                        </Link>
                      </React.Fragment>
                  ))}     
        </div>
    </div>
    </>
   );
  }
}

export default Videos;