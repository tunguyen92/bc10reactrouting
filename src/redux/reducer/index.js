import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/Modules/reducers";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/modules/reducers";

const rootReducer = combineReducers({ listMovieReducer, detailMovieReducer });

export default rootReducer;
