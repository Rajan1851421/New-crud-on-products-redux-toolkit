import React from "react";
import { useSelector } from "react-redux";

import Login from "./Login";
import Shop from "./Shop";

function Home() {
  const { Token_login } = useSelector((state) => state.app);

  if (Token_login) {
    return (
      <>
        <div>
          <Shop />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}

export default Home;
