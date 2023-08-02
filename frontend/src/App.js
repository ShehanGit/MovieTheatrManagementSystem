import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudents';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/add" exact element={<AddStudent />} />
          <Route path="/" exact element={<AllStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
