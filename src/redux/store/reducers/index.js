// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import clients from "./clients";
import auth from "./auth";
import modal from "./modal";
import users from "./users";
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, clients, auth, modal, users });

export default reducers;
