import React from 'react';
import '../Main/main.scss';
import Videos from '../../Components/MainVid/videos';
import Dollie from "../../Assets/Images/img-dollier.png";
import Food from "../../Assets/Images/food-drink.png";

function Main() {


  return (
          <>
          <div className='main__wraper'>
          <Videos img={Dollie} title={"Dollie Blair"} width={230} height={130}/>
          <Videos title={"Recommended"} width={430} height={220}/>
          <button className='main__btn'>Subscribe 2.3m</button>
          <Videos img={Food} title={"Food & Drink"} text={"Recommended channel for you"} width={230} height={130}/>
          </div>
          </>
        );
}

export default Main;