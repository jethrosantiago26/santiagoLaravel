import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as routers, routes, route } from 'react-router-dom';
import Example from "./Example";
import Home from './Home';

export default function Routers() {
  return (
    <router>
      <routes>
        <route path="/" element={<Example/>} />
        <route path="/home" element={<Home/>} />
      </routes>
    </router>
  )
}

if(document.getElementById("root")) {
  ReactDOM.render(<Routers />, document.getElementById("root"));
}