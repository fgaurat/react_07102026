import React, { useState } from "react";
import { useFormState } from "react-dom";

function Form() {
  const [name, setName] = useState("Fred");
  return (
    <>
      <h2>Form</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default Form;
