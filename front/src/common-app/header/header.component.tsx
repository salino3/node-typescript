import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext, MyState } from '@/core';
import { Button } from '@/common/button';
import { SwitchRoutes } from '@/routes';
import { Logout } from '../logout-button';
import * as classes from './header.styles';


export const Header: React.FC = () => {

    const { currentlyUserData } = React.useContext<MyState>(GlobalContext);

    const navigate = useNavigate();

    console.log(currentlyUserData);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.contentLeft}>
          <h3 className={classes.titleHeader}>
            {currentlyUserData && currentlyUserData?.userId
              ? "Welcome " + currentlyUserData?.name + "!"
              : "My Web Page"}
          </h3>
          <Button
            disabled
            text="Home"
            click={() => navigate(SwitchRoutes.root)}
          />
        </div>
        <div className={classes.contentRight}>
          <nav className={classes.navbar}>
            <ul>
              <li className={classes.liAnchor}>
                <Link to={SwitchRoutes.dashboard}>
                  {currentlyUserData && currentlyUserData?.userId
                    ? "All User"
                    : "Login"}
                </Link>
              </li>
              {currentlyUserData && currentlyUserData?.userId && (
                <>
                  <li className={classes.liAnchor}>
                    <Link
                      to={`${SwitchRoutes.deleteUser}/${currentlyUserData?.userId}`}
                    >
                      Delete profile
                    </Link>
                  </li>
                  <li className={classes.liAnchor}>
                    <Link
                      to={`${SwitchRoutes.updateUser}/${currentlyUserData?.userId}`}
                    >
                      Modify profile
                    </Link>
                  </li>
                </>
              )}
              <li className={classes.liBtn}>
                {currentlyUserData && currentlyUserData?.userId ? (
                  <Logout />
                ) : (
                  <Button
                    disabled
                    text="Create profile"
                    click={() => navigate(SwitchRoutes.createUser)}
                    divWidth={120}
                  />
                )}
              </li>
              {currentlyUserData && currentlyUserData?.role === "admin" && (
                <li className={classes.liBtn}>
                  <Button
                    disabled
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
