import { All_Actions, State } from ".";

export const MyReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "UPDATE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
