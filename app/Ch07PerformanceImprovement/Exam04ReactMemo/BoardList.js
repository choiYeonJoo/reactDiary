"use client"

import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
  const boards = [];
  for(var i=5; i>=1; i--) {
    boards.push({bno:i, btitle:"제목"+i, selected:false});
  }
  return boards;
}

function BoardList() {
  const [bno, setBno] = useState(6);
  const [btitle, setBtitle] = useState("");  
  const [boards, setBoards] = useState(getBoards);

  const getLength = useMemo(() => {
    return boards.length
  }, [boards]);

  //컴포넌트가 처음 렌더링될 때만 함수 선언
  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []);

  //컴포넌트가 처음 렌더링될 때만 함수 선언
  const addBoard = useCallback((argBno, argBtitle) => {
    const newBoard = { bno:argBno, btitle:argBtitle };
    setBoards(prevBoards => {
      const newBoards = prevBoards.concat(newBoard);
      newBoards.sort((a, b) => {return b.bno - a.bno});
      return newBoards;
    });
    setBno(prevBno => prevBno + 1);
    setBtitle("");
  }, []); 

  //컴포넌트가 처음 렌더링될 때만 함수 선언
  const changeBoard = useCallback((argBno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.map(board => {
        if(board.bno === argBno) {
          const newBoard = {...board, btitle:board.btitle+"(변경)"};
          return newBoard;
        } else {
          return board;
        }
      });
      return newBoards;
    });
  }, []);

  //컴포넌트가 처음 렌더링될 때만 함수 선언
  const removeBoard = useCallback((argBno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.filter(board => board.bno !== argBno);
      return newBoards;
    });
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        BoardList
      </div>
      <div className="card-body">
          <div>
            <span className="me-2">게시물 수:</span> 
            <span className="text-danger">{getLength}</span>
            <div className="d-flex align-items-center mt-2 mb-3">
              <span className="me-2">제목:</span>
              <input type="text" value={btitle} onChange={handleBtitleChange}/>
              <button className="btn btn-info btn-sm ms-3" onClick={() => addBoard(bno, btitle)}>추가</button>
            </div>
          </div>
          <div className="d-flex bg-info">
            <span className="border" style={{width:"80px"}}>번호</span>
            <span className="border flex-fill">제목</span>
          </div>
          {boards.map((board) => (
            <BoardListItem key={board.bno} 
                           board={board} 
                           removeBoard={removeBoard}
                           changeBoard={changeBoard}/>
          ))}
      </div>
    </div>
  );
}

export default BoardList;