import React from "react";
import Navigationbar from "./Navbar";
import InfoPage from "./InfoPage";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navigationbar />
      <InfoPage />
    </div>
  );
};

export default HomePage;
