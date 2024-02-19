"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

function BoardList() {
  //쿼리스트링에서 pageNo 얻기
  const searchParams = useSearchParams();
  let paramPageNo = searchParams.get("pageNo");
  paramPageNo = parseInt(paramPageNo || "1");

  //page 상태 선언(페이징 및 게시물 목록 저장)
  const [pageNo, setPageNo] = useState(paramPageNo);
  const [page, setPage] = useState(null);

  //pageNo에 해당하는 게시물 목록 얻기
  useEffect(() => {
    const work = async () => {
      try {
        const response = {data : []}//await getBoardList(pageNo);
        setPage(response.data);
      } catch(error) {
        console.log(error.response.status);
      }
    };
    work();
  }, [pageNo]);

  return (
    <div className="card">
      <div className="card-header">BoardList</div>
      <div className="card-body">
        {page!=null &&
          <div>
            <div className="mb-3">
              <Link href="/Ch09RestAPI/Exam04Board/BoardWrite" className="btn btn-info btn-sm">
                생성
              </Link>
            </div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>글쓴이</th>
                  <th>날짜</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                {page.boards.map(board => {
                  return (
                    <tr key={board.bno}>
                      <td>{board.bno}</td>
                      <td>
                        <Link href={`/Ch09RestAPI/Exam04Board/BoardRead/${board.bno}?pageNo=${page.pager.pageNo}`}>
                          {board.btitle}                        
                        </Link>
                      </td>
                      <td>{board.bwriter}</td>
                      <td>{new Date(board.bdate).toLocaleDateString()}</td>
                      <td>{board.bhitcount}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td colSpan="5" style={{textAlign: "center"}}>
                    <button className="btn btn-outline-primary btn-sm me-1" onClick={() => setPageNo(1)}>처음</button> 
                    {(page.pager.groupNo > 1) && 
                      <button	className="btn btn-outline-warning btn-sm me-1" onClick={()=> setPageNo(page.pager.startPageNo-1)}>이전</button>
                    }
                    {page.pager.pageArray.map(i =>
                      <button className={`btn ${i === page.pager.pageNo?"btn-danger":"btn-outline-success"} btn-sm me-1`} key={i} onClick={() => setPageNo(i)}>{i}</button>
                    )}
                    {page.pager.groupNo < page.pager.totalGroupNo && 
                      <button	className="btn btn-outline-warning btn-sm me-1" onClick={()=> setPageNo(page.pager.endPageNo+1)}>다음</button>
                    }
                    <button className="btn btn-outline-primary btn-sm" onClick={() => setPageNo(page.pager.totalPageNo)}>맨끝</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
}

export default BoardList;