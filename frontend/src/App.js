import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AddMovie from "./components/AddMovie";
import AllMovies from "./components/AllMovies";
import UpdateMovies from "./components/UpdateMovies";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/addMovie" exact element={<AddMovie />} /> {/*we write exact eod for only display path=/ for exact /*/}
          <Route path="/" exact element={<AllMovies />} />
          <Route path="/updateMovie" exact element={<UpdateMovies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
