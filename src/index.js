import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './NavigationBar';
import registerServiceWorker from './registerServiceWorker';
import HomeCarousel from './Carousel';


ReactDOM.render(<NavigationBar />, document.getElementById('navbar'));
ReactDOM.render(<HomeCarousel />, document.getElementById('carousel'));

registerServiceWorker();
