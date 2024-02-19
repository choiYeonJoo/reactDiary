'use client';

import { createContext, useEffect, useState } from "react";

//Context 생성 및 내보내기
export const AuthContext = createContext();

//컴포넌트 정의 및 내보내기
export function AuthContextProvider(props) {
  //상태 생성
  const [user, setUser] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  //마운트될 때 로컬 스토리지에 있는 내용으로 상태 저장
  useEffect(() => {
    setUser(localStorage.getItem("user") || "");
    setAccessToken(localStorage.getItem("accessToken") || "");
    setRefreshToken(localStorage.getItem("accessToken") || "");
  }, []);

  //상태가 변경되면 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("user", user);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }, [user, accessToken, refreshToken]);

  //상태를 래핑해서 전역 상태 생성
  const globalState = {
    user: user,
    accessToken,
    refreshToken,
    setUser: setUser,
    setAccessToken,
    setRefreshToken
  }

  //<AuthContext.Provider>로 대체하고, value 속성값으로 전역 상태 제공
  return (
    <AuthContext.Provider value={globalState}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;


