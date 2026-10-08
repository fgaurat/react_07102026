import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
  }
};

const initialState = { count: 0, firstName: "fred" };

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>UseReducer</h2>
      firstName : {state.firstName}
      <br />
      count : {state.count}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
    </>
  );
}

export default UseReducer;
