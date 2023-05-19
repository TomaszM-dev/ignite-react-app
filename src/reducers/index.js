import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

const rootReducers = combineReducers({
  games: gameReducer,
  user: "",
});

const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducers;
