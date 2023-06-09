import { useState } from "react";
import axios from "axios";
import { Careers } from "../utils/consts";

// const url = "http://127.0.0.1:5000/todo/api/v1.0/tasks";

export default function SearchComponent (){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  
    axios.get(Careers)
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Enter search term"
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    );
}