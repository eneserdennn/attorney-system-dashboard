// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import clients from "./clients";
import auth from "./auth";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, clients, auth });

export default reducers;
