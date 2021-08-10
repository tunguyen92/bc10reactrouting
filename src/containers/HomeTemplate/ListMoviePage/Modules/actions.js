import * as ActionType from "./constants";
import axios from "axios";

export const actFetchListMovie = () => {
  //Gọi axios trong action

  return (dispatch) => {
    //Request
    dispatch(actListMovieRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
      method: "GET",
    })
      .then((result) => {
        //Success
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((error) => {
        //Failed
        dispatch(actListMovieFailed(error));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (data) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: data,
  };
};
