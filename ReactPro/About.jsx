import React from 'react'
import  "./App.css";

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import PieChartIcon from '@material-ui/icons/PieChart';
import CreateIcon from '@material-ui/icons/Create';

import MyLocationIcon from '@material-ui/icons/MyLocation';
import { NavLink } from 'react-router-dom'
// import src from "../src/image/final.jpg"
// import src from "../src/image/final.jpg"





export const About = () => {
    return (
        <>
        
        <section id="header" className=" align-items-top">
        {/* <img src={src} class="card-img-top" alt="..."/> */}

            <div className="center">
                <div className="col">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div >
                                
                                {/* <strong className="brand-name"> We Are Aven</strong> */}
                                <h2>We Are Aven</h2>
                                <h1> Create Web Developer</h1>
                                <h6 className="my-3">
                                    We Are Digital Agencies From Earth, Web Publication Made Easy With Us.
                                </h6>
                                <h6> We Are Working On Complete World Wide
                                </h6>
                                {/* <div className="my-3">
                                    <NavLink to="/Service" className="btn-get-started">Get Started</NavLink>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
            
            <div className="container">
  <div className="row">
    <div className="col-sm">
      <div class="card">
      <div>
      <CreateIcon/>
      </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card">
      <div >
      <MyLocationIcon/>
    </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card">
      <div >
      <PieChartIcon/>
      </div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
      </div>
      </div>
       </section>
        
</>
    );
};
export default About;
