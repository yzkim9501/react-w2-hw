import { createStore } from "redux";
import { combineReducers } from "redux";
import task from "../modules/task";

const rootReducer = combineReducers({
  task,
});
const store = createStore(rootReducer);

export default store;
