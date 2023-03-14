// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import clients from "./clients";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, clients });

export default reducers;
