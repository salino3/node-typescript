interface UPDATE_THEME {
  type: "UPDATE_THEME";
  payload: string;
}

export type All_Actions = UPDATE_THEME;

//
export interface Users {
     name: string;
    password: string;
    email: string;
    age: number;
    adult: boolean;
}

//
export interface State {
  theme: string;
  users: Users[]
}

//
export const initialState: State = {
  theme: "light",
  users: []
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  toggleTheme: () => void;
}
