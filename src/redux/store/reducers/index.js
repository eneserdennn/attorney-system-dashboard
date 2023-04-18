// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import clients from "./clients";
import auth from "./auth";
import modal from "./modal";
import users from "./users";
import tasks from "./tasks";
import folders from "./folders";
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  clients,
  auth,
  modal,
  users,
  tasks,
  folders,
});

export default reducers;
