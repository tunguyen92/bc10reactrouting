import * as ActionType from "./constants";
import axios from "axios";

export const actAddUser = (user) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }

  return async (dispatch) => {
    try {
      dispatch(actAddUserRequest());
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        method: "POST",
        data: user,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (result.statusText === "OK") {
        dispatch(actAddUserSuccess(result.data));
      } else {
        dispatch(actAddUserFailed(result));
      }
    } catch (error) {
      dispatch(actAddUserFailed(error));
    }
  };
};

export const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};

export const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};

export const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};
