import React from "react";

function TPEvent() {
  function doClick(name: string) {
    console.log(`Hello ${name}`);
  }

  return (
    <>
      <h2>TPEvent</h2>
      <button onClick={() => doClick("Fred")}>Click !</button>
      <a
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          doClick("Lien");
        }}
      >
        Un lien
      </a>
    </>
  );
}

export default TPEvent;
