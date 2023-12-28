interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: string;
};

export type All_Actions = UPDATE_THEME;

//
export interface Users {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: number | null;
  job: string;
  gender: string;
};

//
export interface State {
  theme: string;
  users: Users[]
};

//
export const initialState: State = {
  theme: "light",
  users: []
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
  capitalizing: (str: string) => string;
};
