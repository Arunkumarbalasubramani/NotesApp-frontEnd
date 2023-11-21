import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import NotesPage from "./components/Notes";
import EditPage from "./components/EditPage";
import ViewNote from "./components/ViewNote";
import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/editpage" element={<EditPage />} />
        <Route path="/viewnote" element={<ViewNote />} />
        <Route path="/addnote" element={<AddNote />} />
      </Routes>
    </>
  );
}

export default App;
