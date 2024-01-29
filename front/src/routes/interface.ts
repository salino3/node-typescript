export interface Routes {
  root: string;
  dashboard: string;
  createUser: string;
  adminPage: string;
  updateUser: string;
  deleteUser: string;
  updatePassword: string;
};

export const SwitchRoutes: Routes = {
  root: "/my-web",
  dashboard: "/my-web/private",
  createUser: "/my-web/create-user",
  adminPage: "/my-web/admin-page",
  updateUser: "/my-web/private/update-user",
  deleteUser: "/my-web/private/delete-user",
  updatePassword: "/my-web/private/update-password",
};