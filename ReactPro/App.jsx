import React,{useState,useEffect} from 'react';
// import AppBar1 from './AppBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from 'react-router';
import Home from './Home';
import About from './About';
import Team from './Team';
import Prices from './Prices';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Service from './Service';
import Navbar1 from "./Navbar";
import ImageSlide from './ImageSlide';
import {Tabs,Tab,} from "react-bootstrap";

export const App = () => {
    const [key, setKey] = useState('home');
    return (
        <>
      
        <Navbar1 />
      
        <Switch>
        <Route exact path="/Home" component={ImageSlide}  />
        <Route exact path="/About" component={About}  />
        <Route exact path="/Service" component={Service}  />
        <Route exact path="/Contact" component={Contact}  />
        <Route exact path="/Prices" component={Prices}  />
        <Route exact path="/Team" component={Team}  />
        <Route exact path="/Portfolio" component={Portfolio}  />
        
        
        </Switch>
        </>
    );
};
export default App;
