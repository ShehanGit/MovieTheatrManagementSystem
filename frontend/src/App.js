import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AllStudent from './components/AllStudents';
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/addMovie" exact element={<AddMovie />} />
          <Route path="/" exact element={<AllStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
