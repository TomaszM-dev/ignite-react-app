import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import detailReducer from "./detailReducer";

const rootReducers = combineReducers({
  games: gameReducer,
  detail: detailReducer,
});

const userReducer = (state, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducers;
