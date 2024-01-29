import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext, MyState, UsersAllData } from '@/core';
import { SwitchRoutes } from '@/routes';
import { Button } from '@/common/button';
import * as classes from './card-all-users.styles';

interface Props {
  user: UsersAllData;
};

export const CardAllUsers: React.FC<Props> = (props) => {
    const {user} = props;

    const { currentlyUserData} = React.useContext<MyState>(GlobalContext);

    const navigate = useNavigate();

  return (
    <div
      className={classes.container}>
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
 {currentlyUserData && currentlyUserData?.userId === user?.id || currentlyUserData && currentlyUserData?.role === "admin" ? 
      <div className={classes.boxBtns}>
        <Button text="Update" 
        click={() => navigate(`${SwitchRoutes.updateUser}/${user.id}`)}
        />
        <Button
          text="Delete"
        />
      </div>  : "" }
          
    </div>
  );
}
