import React from 'react';
import { AddUserForm, AllUsers, GetOneUser, Logout, LoginForm, DeleteProfile, DeleteProfileByAdmin } from './components';
import { Header } from '@/common-app';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {


  return (
    <classes.Div>
      <Header />
      <h1>Home Page</h1>
      <details className={classes.detailsHome}>
        <summary>
          <span>Create New Profile</span>
        </summary>
        <AddUserForm />
      </details>
      <details className={classes.detailsHome}>
        <summary>All Users</summary>
        <AllUsers />
      </details>
      <details className={classes.detailsHome}>
        <summary>Login User</summary>
        <LoginForm />
      </details>
      <details className={classes.detailsHome}>
        <summary>Logout</summary>
        <Logout />
      </details>
      <details className={classes.detailsHome}>
        <summary>Get One User</summary>
        <GetOneUser />
      </details>
      <details className={classes.detailsHome}>
        <summary>Delete your profile</summary>
        <DeleteProfile />
      </details>
      <details className={classes.detailsHome}>
        <summary>Delete Profile By Admin</summary>
        <DeleteProfileByAdmin />
      </details>
    </classes.Div>
  );
}
