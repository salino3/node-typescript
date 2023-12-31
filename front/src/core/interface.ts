interface GET_USERS {
  type: "GET_USERS";
  payload: UsersAllData[];
};

interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: string;
};

export type All_Actions = GET_USERS | UPDATE_THEME;

//
export interface UsersAllData {
  id: string;
  name: string;
  surname: string;
  email: string;
  password?: string;
  age: number | null;
  job: string;
  isAdult: boolean;
  gender: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
};


export interface Users {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password?: string;
  age: number | null;
  job: string;
  gender: string;
  role?: string;
};

//
export interface State {
  theme: string;
  users: UsersAllData[];
};

//
export const initialState: State = {
  theme: "light",
  users: []
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  getUsers: (users: UsersAllData[]) => void;
  toggleTheme: () => void;
  capitalizing: (str: string) => string;
};
