import React from 'react';
import './Title.css';
import { Link } from "react-router-dom";
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
        <div className="Links">
          <Link className="link" to="/">List</Link>
          <Link className="link" to="/about">About</Link>
          <RandomSpace />
        </div>
    </div>
  )
}

export default Title