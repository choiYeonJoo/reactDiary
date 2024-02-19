"use client" // 붙어있으면 클라이언트 컴포넌트, 없으면 서버 컴포넌트. 없으면 서버에서 랜더링하고 있으면 클라이언트에서 랜더링한다. 기본적으로 app 폴더 하단은 서버 컴포넌트
import { useContext } from "react";
import { AuthContext } from "./states/context/AuthContextProvider";

import { useSelector, useDispatch } from "react-redux";
import { setUser as gSetUser, selectUser } from "@/app/states/redux/slices/auth/authSlice";

import Image from "next/image";
import Link from "next/link";

function RootHeader() {

  //Ch08(Context)
  const globalState = useContext(AuthContext);

  const dispatch = useDispatch();

  const handleLogout = () => {
    //Ch08(Context)
    globalState.setUser("");
    globalState.setAccessToken("");
    globalState.setRefreshToken("");
  } 


  //Ch08(Redux)
  const ReduxSelectUser = useSelector(selectUser)
  
  return (
    <nav className="navbar justify-content-between bg-dark text-white">
      <div className="container-fluid">
        {/* Link 는 a 태그로 생각하면 된다. */}
        <Link href="/" className="navbar-brand">
          <Image className="align-top" src="/logo512.png" alt="Logo" width="30" height="30"/>
          <span className="ms-2 text-white">React</span>
        </Link>        

        {/* Ch08(Context) */}
        <div>
          {(globalState.user === "")? (
            <Link href="/Ch08GlobalState/Exam02AuthContext" className="btn btn-success btn-sm">로그인</Link>
          ) : (
            <div className="d-flex align-items-center">
              <span className="me-2">User ID: {globalState.user}</span>
              <button className="btn btn-success btn-sm" onClick={handleLogout}>로그아웃</button>
            </div> 
          )}
        </div>

      </div>
    </nav>
  );
}

//반드시 component를 내보내기 해야함
export default RootHeader;