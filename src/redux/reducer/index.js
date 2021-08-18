import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/Modules/reducers";
import detailMovieReducer from "../../containers/HomeTemplate/DetailMoviePage/modules/reducers";
import authReducer from "../../containers/AdminTemplate/Auth/modules/reducers";
import addUserReducer from "../../containers/AdminTemplate/AddUser/modules/reducers";

const rootReducer = combineReducers({
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
});

export default rootReducer;
