import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Thanku() {
  return (
    <div>
      <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1>Thank you !</h1>
            <p>
              Thank you for showing interest ! Our Team will contact you soon{' '}
            </p>
            <Link to="/">
              <button className="go-home">go home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanku;
