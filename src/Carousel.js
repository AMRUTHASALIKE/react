import React from 'react';
import use from './use.PNG';
import share from './share.PNG';
import time from './time.PNG';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './IS.css';

class HomeCarousel extends React.Component {
    render() {
      return (
        <div>
          <div className="SearchBar">
            <button type="submit" style={{borderRadius: 7,height: 50,top: 10}}><i className="fa fa-search"/></button>
            <input placeholder="Search.." className="search" type="text" style={{borderRadius: 7}}/>
            <input type="submit" value="Submit" style={{borderRadius: 7,height: 50,top: 10}}/>
          </div>  
          
          <div> 
            <center>
          
              <Carousel autoPlay className="carousel"  align={"center"}>
            
                <div>
                  <img src={use} /> 
                </div>
            
                <div>
                  <img src={share}/>
                </div>
            
                <div>
                  <img src={time} />
                </div>

              </Carousel>
            </center>
          </div>
        </div>
      );
    }
  }
  
  export default HomeCarousel;


