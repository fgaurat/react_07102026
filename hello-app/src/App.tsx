import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const isShow = true;
  return (
    <>
      <Hello firstName="Fred" name="GAURAT" showTitle={isShow} />
      <Hello firstName="Robert" name="DUPONT" showTitle={!isShow} />
    </>
  );
}

export default App;
