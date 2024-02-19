"use client"

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { produce } from "immer";

function BoardUpdate() {
  //패스변수에서 bno 얻기
  const bno = parseInt(useParams().bno);

  //상태 선언
  const [board, setBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: "",
  });

  //수정할 게시물 가져오기
  useEffect(() => {
    let data = {bno: "",
    btitle: "",
    bcontent: "",}
    setBoard({
      bno: data.bno,
      btitle: data.btitle,
      bcontent: data.bcontent
    });
  }, [bno]);

  //폼의 입력값을 상태에 저장
  const handleChange = useCallback((event) => {
    setBoard(
      produce((draft) => {
        draft[event.target.name] = event.target.value;
      }),
    );
  }, []);

  //내비게이션 객체 얻기
  const router = useRouter();

  //게시물 업데이트 요청
  const handleUpdate = async (event) => {
    event.preventDefault();
    const dirtyBoard = { ...board }; //서버 API에 전달할 때, 상태객체 그대로 넘기지 말고, 복제해서 넘길 것
    //await updateBoard(dirtyBoard);
    router.back();
  };

  //취소하기
  const handleCancel = (event) => {
    router.back();
  };

  return (
    <div className="card">
      <div className="card-header">BoardUpdate</div>
      <div className="card-body">
        <form onSubmit={handleUpdate}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">
              btitle
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">
              bcontent
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group row mt-2">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-info btn-sm me-2" value="수정" />
              <input type="button" className="btn btn-info btn-sm" value="취소" onClick={handleCancel} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardUpdate;
