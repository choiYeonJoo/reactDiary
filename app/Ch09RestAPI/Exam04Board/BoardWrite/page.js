"use client"

import { useCallback, useContext, useState, useRef } from "react";
import { produce } from "immer";
import { AuthContext } from "@/app/states/context/AuthContextProvider";
import { useRouter } from "next/navigation";

function BoardWrite() {
  //상태 선언
  const [board, setBoard] = useState({
    btitle: "",
    bcontent: "",
  });

  //전역 상태 얻기
  const globalState = useContext(AuthContext);

  //폼 입력값을 상태에 저장
  const handleChange = useCallback((event) => {
    setBoard(
      produce((draft) => {
        draft[event.target.name] = event.target.value;
      }),
    );
  }, []);

  //DOM 참조 선언
  const inputFile = useRef();

  //라우터 객체 얻기
  const router = useRouter();

  //게시물 생성
  const handleAdd = async (event) => {
      try {
        event.preventDefault();
        const multipartFormData = new FormData();
        multipartFormData.append("btitle", board.btitle);
        multipartFormData.append("bcontent", board.bcontent);
        multipartFormData.append("bwriter", globalState.user);
        multipartFormData.append("battach", inputFile.current.files[0]);
        //await createBoardWithAttach(multipartFormData);
        router.back();
      } catch (error) {
        console.log(error);
      }
  };

  //취소 핸들러
  const handleCancel = (event) => {
    router.back();
  };

  return (
    <div className="card">
      <div className="card-header">BoardWrite</div>
      <div className="card-body">
        <form onSubmit={handleAdd}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">
              btitle
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="btitle"
                name="btitle"
                value={board.btitle}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">
              bcontent
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="bcontent"
                name="bcontent"
                value={board.bcontent}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="battach" className="col-sm-2 col-form-label">
              battach
            </label>
            <div className="col-sm-10">
              <input id="battach" name="battach" type="file" className="form-control-file"
                ref={inputFile}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-info btn-sm me-2" value="추가" />
              <input
                type="button"
                className="btn btn-info btn-sm"
                value="취소"
                onClick={handleCancel}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardWrite;
