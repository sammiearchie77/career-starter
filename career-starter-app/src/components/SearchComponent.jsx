import { useState } from "react";
import axios from "axios";
import { Careers } from "../utils/consts";

const url = "http://localhost:8080/api/v1/careers";

export default function SearchComponent (){
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  
    axios.get(url)
      .then((response) => {
        console.log(response);
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
            id="text"
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