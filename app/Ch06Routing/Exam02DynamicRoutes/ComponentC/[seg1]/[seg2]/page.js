"use client"

import { useParams } from "next/navigation";

function ComponentC() {
  const params = useParams();
  console.log(params);
  const seg1 = params.seg1;
  const seg2 = params.seg2;

  return (
    <div className="card">
      <div className="card-header">
        ComponentC
      </div>
      <div className="card-body">
        <div>seg1: {seg1}</div>
        <div>seg2: {seg2}</div>
      </div>
    </div>
  );
}

export default ComponentC;

