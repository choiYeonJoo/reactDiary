"use client"

import React, { useCallback } from "react";

function BoardListItem(props) {
  console.log("렌더링: " + props.board.bno);

  const handleChange = useCallback((bno) => {
    props.changeBoard(bno);
  }, [props]);

  const handleRemove = useCallback((bno) => {
    props.removeBoard(bno);
  }, [props]);

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom">
      <div className="d-flex">
        <span style={{width:"80px"}}>{props.board.bno}</span>
        <span>{props.board.btitle}</span>
      </div>
      <div>
        <button className="btn btn-outline-primary btn-sm me-1" onClick={() => handleChange(props.board.bno)}>변경</button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(props.board.bno)}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(BoardListItem);