import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { data } from "autoprefixer";


const Portfolio = () => {
  const [webData, setWebData] = useState([]);
  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setWebData(data));
    console.log(data)
  },[])
  
  return (
    <div className="bg-teal-200 h-96" id="portfolio">
      {
        webData.map((data, idx)=><Card key={idx} data={data}></Card>)
      }
    </div>
  );
};

export default Portfolio;