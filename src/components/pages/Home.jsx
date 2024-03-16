
// import { useSelector } from "react-redux";


import Shop from "./Shop";

function Home() {
  // const { Token_login } = useSelector((state) => state.app);

  return(
    <Shop/>
  )

  // if (Token_login) {
  //   return (
  //     <>
  //       <div>
  //         <Shop />
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Login />
  //     </>
  //   );
  // }
}

export default Home;
