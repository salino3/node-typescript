import React from 'react';
import { UsersAllData } from '@/core';
import { SwitchRoutes } from '@/routes';
import * as classes from './card-all-users.styles';

interface Props {
  user: UsersAllData;
};

export const CardAllUsers: React.FC<Props> = (props) => {
    const {user} = props;


  return (
    <div className={classes.container} onClick={() => {
       window.location.href = `${SwitchRoutes.updateUser}/${user.id}`
      }}>
      <div className={classes.boxCardText}>
        <h3 className={classes.cardText}>
          <span className={classes.spanType}>Name:</span>
          <span className={classes.spanValue}>{user?.name}</span>
        </h3>
      </div>
      <div className={classes.boxCardText}>
        <h3 className={classes.cardText}>
          <span className={classes.spanType}>Surname:</span>
          <span className={classes.spanValue}>{user?.surname}</span>
        </h3>
      </div>
      <div className={classes.boxCardText}>
        <h3 className={classes.cardText}>
          <span className={classes.spanType}>Email:</span>
          <span className={classes.spanValue}>{user?.email}</span>
        </h3>
      </div>
      <div className={classes.boxCardText}>
        <h3 className={classes.cardText}>
          <span className={classes.spanType}>Age:</span>
          <span className={classes.spanValue}>{user?.age}</span>
        </h3>
      </div>{" "}
      <div className={classes.boxCardText}>
        <h3 className={classes.cardText}>
          <span className={classes.spanType}>Adult:</span>
          <span className={classes.spanValue}>
            {user?.isAdult ? "Yes" : "Not"}
          </span>
        </h3>
      </div>{" "}
      <div className={classes.boxCardText}>
        <h3 className={classes.cardText}>
          <span className={classes.spanType}>Gender:</span>
          <span className={classes.spanValue}>{user?.gender}</span>
        </h3>
      </div>
      <div className={classes.boxCardText}>
        <h3 className={classes.cardText}>
          <span className={classes.spanType}>Job:</span>
          <span className={classes.spanValue}>{user?.job}</span>
        </h3>
      </div>
    </div>
  );
}
