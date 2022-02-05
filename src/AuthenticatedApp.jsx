import React from 'react';
import Home from './Pages/Home/home';
import Channel from './Pages/Channel/channel';
import Player from './Pages/Player/player';
import {Routes , Route, Navigate} from "react-router-dom";

function AuthenticatedApp() {
  return (
    <>
      <Routes>
      <Route path='' element={<Navigate to='/home' />} />
        <Route path="home" element={<Home/>}/>
        <Route path="channel" element={<Channel/>}/>
        <Route path="player" element={<Player/>}/>
        <Route path="player/:id" element={<Player/>}/>
        <Route path='*' element={<h1>Not found 404</h1>} />
    </Routes>
    </>
  );
}

export default AuthenticatedApp;