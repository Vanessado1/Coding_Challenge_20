import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import './styles/styles.css';


const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState("");

  useEffect(() => {
    fetch("/api/react-tours-project")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleFilter = (destination) => {
    setSelectedDestination(destination);
  };
  
  return (
       <div className="app-container"> 
        <h1 className="header">Tour Selector</h1>
      <DestinationSelector tours={tours} onFilter={handleFilter} />
      <Gallery
        tours={tours}
        selectedDestination={selectedDestination}
        loading={loading}
        error={error}
        setTours={setTours}
      />
    </div>
  );
};

export default App;
