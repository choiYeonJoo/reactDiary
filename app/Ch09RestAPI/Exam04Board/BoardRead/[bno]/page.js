"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";

function BoardRead() {
  //패스변수에서 bno 얻기
  const bno = parseInt(useParams().bno); //path 정보에서 가져옴

  //쿼리스트링에서 pageNo 얻기
  const searchParams = useSearchParams();
  const pageNo = searchParams.get("pageNo");

  //상태 선언
  const [board, setBoard] = useState({});

  //게시물을 요청해서 상태에 저장
  useEffect(() => {
    const work = async () => {
      try {
        const response = {data:{}}//await readBoard(bno);
        setBoard(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    work();
  }, [bno]);


  //게시물 삭제 요청
  const router = useRouter();
  const handleRemove = async (event) => {
    try {
      //await deleteBoard(board.bno);
      router.back()//.push("/Ch09RestAPI/Exam04Board/BoardList?pageNo=" + pageNo);
    } catch (error) {
      console.log(error);
    }
  };

  //방법1: 첨부 파일을 다운로드하고, <img>에 나타내기 --------------------
  const [imgSrc, setImgSrc] = useState(null);

  return (
    <div className="card">
      <div className="card-header">BoardRead</div>
      {board && (
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>bno: {board.bno}</p>
              <p>btitle: {board.btitle}</p>
              <p>bcontent: {board.bcontent}</p>
              <p>bwriter: {board.bwriter}</p>
              <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
              <p>bhitcount: {board.bhitcount}</p>
              <p>battachoname: {board.battachoname}</p>
              <p>battachsname: {board.battachsname}</p>
              <p>battachtype: {board.battachtype}</p>
            </div>
            <div className="col-md-6">
              {board.battachoname && (
                <>
                  {/* 방법1 */}
                  {/* <Image/>는 Blob 지원하지 않음 */}
                  <img src={imgSrc} alt="" width="200" height="200"/>
                </>
              )}
            </div>
          </div>
          <div className="mt-3">
            <Link href={"/Ch09RestAPI/Exam04Board/BoardList?pageNo=" + pageNo} className="btn btn-info btn-sm me-2">
              목록
            </Link>
            <Link href={`/Ch09RestAPI/Exam04Board/BoardUpdate/${board.bno}`} className="btn btn-info btn-sm me-2">
              수정
            </Link>
            <button className="btn btn-info btn-sm me-2" onClick={handleRemove}>
              삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardRead;

