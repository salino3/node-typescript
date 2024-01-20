import React from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '@/pods/home/components';
import * as classes from './header.styles';


export const Header: React.FC = () => {

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.contentLeft}>
          <h3 className={classes.titleHeader}>My Web Page</h3>
          <button>Home</button>
        </div>
        <div className={classes.contentRight}>
          <nav className={classes.navbar}>
            <ul>
              <li className={classes.liAnchor}>
                <Link to={"#"}>All User</Link>
              </li>
              <li className={classes.liAnchor}>
                <Link to={"#"}>Delete profile</Link>
              </li>
              <li className={classes.liAnchor}>
                <Link to={"#"}>Modify profile</Link>
              </li>
              <li className={classes.liBtn}>
                <Logout />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
