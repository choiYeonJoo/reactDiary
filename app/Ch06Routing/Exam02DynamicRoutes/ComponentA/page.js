"use client"

import { useSearchParams } from "next/navigation";

function ComponentA() {
  const queryString = useSearchParams() // 경로에서 쿼리스트링으로 값 가져오기, 클라이언트 컴포넌트에서만 쓸 수 있음
  const key1 = queryString.get("key1");
  const key2 = queryString.get("key2");
  return (
    <div className="card">
      <div className="card-header">
        ComponentA
      </div>
      <div className="card-body">
      <div>key1: {key1}</div>
        <div>key2: {key2}</div>
      </div>
    </div>
  );
}

export default ComponentA;

