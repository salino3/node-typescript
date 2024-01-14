import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './header.styles';


export const Header: React.FC = () => {

  return (
    <header className={classes.header}>
      <div className="contentLeft">
        <h3>My Web Page</h3>
        <button>Home</button>
      </div>
      <div className="contentRight">
        <nav>
          <ul>
            <li>
              <Link to={"/"}></Link>
            </li>
            <li>
              <Link to={"/"}></Link>
            </li>
            <li>
              <Link to={"/"}></Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
