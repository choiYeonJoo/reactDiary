"use client"

import { useParams } from "next/navigation";

function ComponentD() {
  const params = useParams();
  console.log(params);
  const segs0 = params.segs[0];
  const segs1 = params.segs[1];

  return (
    <div className="card">
      <div className="card-header">
        ComponentD
      </div>
      <div className="card-body">
        <div>segs[0]: {segs0}</div>
        <div>segs[1]: {segs1}</div>
      </div>
    </div>
  );
}

export default ComponentD;

