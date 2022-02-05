import React from 'react';
import '../Player/player.scss';
import Header from '../../Components/Header/header';
import Aside from '../../Components/Aside/aside';
import VideoPlayer from '../../Components/VideoPlayer/videoPlayer';

function Player() {
  return (
    <>
       <div className="row">
         <div className="col-12"><Header/></div>
         <div className="col-9"><VideoPlayer/></div>
         <div className="col-3"><Aside width={310} height={190}/></div>
       </div>
    </>
  );
}

export default Player;