import React from "react";
import Navbar from "../components/Navbar";
import { ReactComponent as HomeImage } from "../assets/undraw_make_it_rain_iwk4.svg";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h2 style={{ margin: "20px", textAlign: "center" }}>
          Welcome to Bank of React
        </h2>
        <HomeImage style={{ display: "block", margin: "0 auto" }} />
      </div>
    </>
  );
}

export default Home;
