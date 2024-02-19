"use client"

import axios from "axios";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../states/redux/slices/auth/authSlice";

axios.defaults.baseURL = "http://localhost:8080";

export function addAuthHeader(accessToken) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

export function removeAuthHeader() {
  delete axios.defaults.headers.common["Authorization"];
}

export function LoadAccessToken() {
  //Ch09: 브라우저 리프레쉬 버튼시 요청 공통 헤더 Authorization 추가 --------
  //이유: 인증을 필요로하는 페이지에서 리프레쉬하면 Authorization 헤더가 없어 401(Unauthorized) 에러 발생

  //방법1: Context API를 사용할 경우
  //const globalState = useContext(AuthContext);
  //const accessToken = globalState.accessToken;

  //방법2: Redux(with redux-persist)를 사용할 경우
  const accessToken = useSelector(selectAccessToken);
  
  //accessToken이 존재할 경우 = 이미 로그인되어 있는 경우
  if (accessToken !== "") {
    //요청 헤더에 Authorization: Bearer accessToken 추가
    addAuthHeader(accessToken);
  }  
  return null;
}