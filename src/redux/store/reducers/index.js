// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import clients from "./clients";
import auth from "./auth";
import modal from "./modal";
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, clients, auth, modal });

export default reducers;
