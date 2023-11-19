import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
