import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllMovies() {
  const [Movies, setMovies] = useState([]); // Define the state as Movies

  useEffect(() => {
    function getMovies() {
      axios
        .get("http://localhost:8086/Movie/")
        .then((res) => {
          setMovies(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>All Movies</h1>
      <table border="1">
        <tr>
          <th>title</th>
          <th>genre</th>
          <th>director</th>
          <th>releaseDate</th>
          <th>languages</th>
          <th>runtime</th>
          <th>Rating</th>
        </tr>
        {/* Map over the Movies state */}
        {Movies.map((i) => {
          return (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{i.genre}</td>
              <td>{i.director}</td>
              <td>{i.releaseDate}</td>
              <td>{i.languages}</td>
              <td>{i.runtime}</td>
              <td>{i.rating}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
