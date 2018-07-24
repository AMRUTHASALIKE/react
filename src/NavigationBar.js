import React, { Component } from 'react';
import './App.css';
import KV from './UKVlogo.PNG';

class NavigationBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><img src={KV} alt={"KV"} width={95} height={50} align="left" />	</li>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="resource.html">Resource</a></li>
              <li><div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
    <a href="#">Option 1</a>
    <a href="#">Option2 2</a>
    <a href="#">Option 3</a>
  </div>
</div></li>
              <li><a href="forum.html">Forum</a></li>
              <li><a href="upload.html">Upload Resources</a></li>
              <li><a href="bugs.html">Bugs</a></li>
              <li><a href="downloads.html">Downloads</a></li>
              <li><a href="signup.html">Register</a></li>
              <li><a href="login.html">Login</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default NavigationBar;