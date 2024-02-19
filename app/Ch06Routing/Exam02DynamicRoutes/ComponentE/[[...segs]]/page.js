"use client"

import { useParams, useSearchParams } from "next/navigation";

function ComponentE() {
  const queryString = useSearchParams();
  const params = useParams();

  return (
    <div className="card">
      <div className="card-header">
        ComponentE
      </div>
      <div className="card-body">
        <div>key1: {queryString.get("key1")}</div>
        <div>segs[0]: {params.segs?params.segs[0]:""}</div>
      </div>
    </div>
  );
}

export default ComponentE;