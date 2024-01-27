export interface Routes {
  root: string;
  dashboard: string;
  createUser: string;
  adminPage: string;
  updateUser: string;
  updatePassword: string;
};

export const SwitchRoutes: Routes = {
  root: "/vite-react",
  dashboard: "/vite-react/private",
  createUser: "/vite-react/crea-user",
  adminPage: "/vite-react/admin-page",
  updateUser: "/vite-react/private/update-user",
  updatePassword: "/vite-react/private/update-password",
};