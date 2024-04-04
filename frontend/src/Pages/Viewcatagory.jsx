import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./card.css";

export default function Viewcatagory() {
  let location = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch categories from the API when the component mounts
    fetch("http://localhost:3000/api/categories")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="flex flex-col justify-center bg-green-900">
      <div className="relative self-center mt-8 text-5xl font-extrabold text-white max-md:max-w-full max-md:text-4xl">
        {location.state.Category} Information
      </div>

      <div className="relative tool-section">
        {data
          .filter((item) => item.Category == location.state.Category)
          .map((category, index) => (
            <div className="tools-content" key={index}>
              <div className="tools-card-items">
                <div className="tool-card">
                  <img src={category.Src} width="450px" height="300px" />
                  <div className="para-card">
                    <span>{category.Name}</span>
                    <p>{category.Description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
