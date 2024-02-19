"use client"

import { useEffect, useState } from "react";

function Ch04LifeCycle() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(101);

  /* useEffect(() => {
    console.log("마운트/업데이트후 실행");
    return () => {
      console.log("언마운트/업데이트전 실행");
    };
  }); */

  /* useEffect(() => {
    console.log("마운트 실행");
    return () => {
      console.log("언마운트 실행");
    };
  }, []); */ 

  //마운트로 이벤트가 발생할 경우와, count1의 상태가 업데이트 되어 이벤트가 발생한 케이스는 분기처리할 수 있는 방법은 
  //별도의 로직 구현으로 count1의 이전 값과 현재값을 체크하여 확인하는 방법밖에는 없다.

  /* useEffect(() => {
    console.log(`마운트/count1 업데이트후 실행(count1=${count1})`);
    return () => {
      console.log(`언마운트/count1 업데이트전 실행(count1=${count1})`);
    };
  }, [count1]); */
  
 /*  useEffect(() => {
    console.log(`마운트/count2 업데이트후 실행(count2=${count2})`);
    return () => {
      console.log(`언마운트/count2 업데이트전 실행(count2=${count2})`);
    };
  }, [count2]); */

  const addCount1 = (event) => {
    setCount1(count1 + 1);
  };

  const addCount2 = (event) => {
    setCount2(count2 + 1);
  };  

  return (
    <div className="card">
      <div className="card-header">Ch04LifeCycle</div>
      <div className="card-body">
        <button className="btn btn-info me-2" onClick={addCount1}>count1 증가</button>
        <button className="btn btn-info" onClick={addCount2}>count2 증가</button>
      </div>
    </div>
  );
}

export default Ch04LifeCycle;