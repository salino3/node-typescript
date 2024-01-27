import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext, MyState } from '@/core';
import { Button } from '@/common/button';
import { Logout } from '@/pods/home/components';
import { SwitchRoutes } from '@/routes';
import * as classes from './header.styles';


export const Header: React.FC = () => {

    const { currentlyUserData } = React.useContext<MyState>(GlobalContext);

    const navigate = useNavigate();

    console.log(currentlyUserData);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.contentLeft}>
          <h3 className={classes.titleHeader}>My Web Page</h3>
          <Button text="Home" click={() => navigate(SwitchRoutes.root)} />
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
                {currentlyUserData && currentlyUserData?.userId ? (
                  <Logout />
                ) : (
                  <Button
                    text="Create profile"
                    click={() => navigate(SwitchRoutes.createUser)}
                    divWidth={120}
                  />
                )}
              </li>
              {currentlyUserData && currentlyUserData?.role === "admin" && (
                <li className={classes.liBtn}>
                  <Button
                    text="Admin page"
                    click={() =>
                      navigate(
                        currentlyUserData?.role === "admin"
                          ? SwitchRoutes.adminPage
                          : "/"
                      )
                    }
                    divWidth={120}
                  />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
