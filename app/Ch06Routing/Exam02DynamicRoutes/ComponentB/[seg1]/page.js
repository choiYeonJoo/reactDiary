"use client"

import { useParams } from "next/navigation";

function ComponentB() {
  const params = useParams();
  console.log(params);
  const seg1 = params.seg1

  return (
    <div className="card">
      <div className="card-header">
        ComponentB
      </div>
      <div className="card-body">
        seg1: {seg1}
      </div>
    </div>
  );
}

export default ComponentB;

