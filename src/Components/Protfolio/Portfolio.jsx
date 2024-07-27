import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Portfolio = () => {
  const [webData, setWebData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('/projectData.json')
      .then(res => res.json())
      .then(data => {
        setWebData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error); // Log error
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  // Initilize count variable to flip card
  let count = 0;
  return (
    <div className="grid grid-cols-1 gap-4 py-3 md:py-6 px-7 md:px-16" id="portfolio">
      {webData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        webData.map((data, idx) => {
          count = count + 1;
          return <Card key={idx} data={data} count={count} />
        })
      )}
    </div>
  );
};

export default Portfolio;
