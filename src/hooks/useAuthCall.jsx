import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, registerSuccess } from "../features/authSlice";

const useAuthCall = () => {

    const dispatch = useDispatch()
  const navigate = useNavigate()



  const BASE_URL = "http://12245.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}account/auth/login`);
      dispatch(loginSuccess(data));
    //   toastSuccessNotify("Login performed");
        navigate("/stock")
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      )
      dispatch(registerSuccess(data))
    //   toastSuccessNotify("Register performed")
      navigate("/register")
    } catch (err) {
      dispatch(fetchFail())
    //   toastErrorNotify("Register can not be performed")
    }
  }


  return {login , register}
};

export default useAuthCall;
