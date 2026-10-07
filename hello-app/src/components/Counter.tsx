import React, { useEffect, useState } from "react";

function Counter() {
  const [cpt, setCpt] = useState<number>(0);

  useEffect(() => {
    console.log("Counter didMount");
    return () => {
      console.log("Counter willUnmount");
    };
  }, []);
  useEffect(() => {
    console.log("cpt change ");
  }, [cpt]);

  function inc() {
    setCpt((value) => value + 1);
  }

  function dec() {
    setCpt((value) => value - 1);
  }
  return (
    <>
      <h1>Counter</h1>

      <p>
        <button onClick={dec}>Dec</button>
        cpt: {cpt}
        <button onClick={inc}>Inc</button>
      </p>
      <br />
      <br />
      <br />
    </>
  );
}

export default Counter;
