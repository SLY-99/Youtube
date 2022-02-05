import React from 'react';
import '../Main/main.scss';
import Videos from '../../Components/MainVid/videos';
import Dollie from "../../Assets/Images/img-dollier.png";
import Food from "../../Assets/Images/food-drink.png";

function Main() {


  return (
          <>
          <div className='main__wraper'>
          <Videos img={Dollie} title={"Dollie Blair"} width={250} height={150}/>
          <Videos title={"Recommended"} width={500} height={250}/>
          <button className='main__btn'>Subscribe 2.3m</button>
          <Videos img={Food} title={"Food & Drink"} text={"Recommended channel for you"} width={250} height={150}/>
          </div>
          </>
        );
}

export default Main;