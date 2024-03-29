interface GET_USERS {
  type: "GET_USERS";
  payload: UsersAllData[];
};

interface GET_USER {
  type: "GET_USER";
  payload: UsersAllData;
};

interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: string;
};

export type All_Actions = GET_USERS | GET_USER | UPDATE_THEME;

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

export interface DecodedToken {
  userId: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

//
export interface State {
  theme: string;
  users: UsersAllData[];
  user: UsersAllData;
};

//
export const initialState: State = {
  theme: "light",
  users: [],
  user: {
    id: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    age: null,
    job: "",
    gender: "",
    role: "",
    isAdult: false
 }
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  getUsers: () => void;
  getUserData: (userID: string) => void;
  toggleTheme: () => void;
  capitalizing: (str: string) => string;
  currentlyUserData: DecodedToken | undefined;
  setCurrentlyUserData: React.Dispatch<React.SetStateAction<DecodedToken | undefined>>;
};
