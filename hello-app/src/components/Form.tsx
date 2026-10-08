import React, { useState } from "react";
import { useFormState } from "react-dom";

function Form() {
  const [name, setName] = useState("Fred");

  function search(formData: FormData) {
    console.log(formData);
    const query = formData.get("query");
    console.log(`You searched for '${query}'`);
  }

  return (
    <>
      <h2>Form</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <form action={search}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Form;
