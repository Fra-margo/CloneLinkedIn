import React, { useState, useEffect } from "react";
import "./ConsigliPerTe.css";

const ConsigliPerTe = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [rotateDropdown, setRotateDropdown] = useState(true);
  const [jobsData, setJobsData] = useState([]);
  const [initialCardCount, setInitialCardCount] = useState(3);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    setRotateDropdown(!rotateDropdown);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10",
          {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4CI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
              'Content-Type': 'application/json'
            }
          }
        );
        const data = await response.json();
        setJobsData(data.data);
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleVisualizzaAltro = () => {
    setInitialCardCount(jobsData.length); // Mostra tutte le card disponibili
  };

  const handleVisualizzaMeno = () => {
    setInitialCardCount(3);
  };

  return (
    <div className="ConsigliatiPerTe">
      <p>
        Seleziona la visualizzazione del feed:{" "}
        <strong>Più rilevanti per primi</strong>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="black"
          className={`bi bi-caret-down-fill ${rotateDropdown ? "rotate" : "unrotate"}`}
          viewBox="0 0 16 16"
          onClick={toggleDropdown}
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
      </p>
      <div>
        <div className={`dropdown ${isDropdownVisible ? "open" : ""}`}>
          <div className="dropdown-contentCons">
            <a href="#">Sponsorizzati</a>
            <a href="#">Più recenti</a>
            <a href="#">Meno recenti</a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="ConsigliH">Consigli per te</h2>
        {jobsData
          .slice(0, initialCardCount)
          .map((job, index) => (
            <div key={index} className="cardConsigli">
              <img src="./logo192.png" alt="img" />
              <div className="cardConsigliDettagli">
                <h3 className="textTooLong">{job.title}</h3>
                <p className="textTooLong">{job.company_name}</p>
              </div>
              <div>
                <button className="card-buttonSegui">
                  <strong>+ Segui</strong>
                </button>
              </div>
            </div>
          ))}
      </div>
      {initialCardCount === 3 && (
        <div className="VisPlus-d">
          <h3 className="VisPlus">
            <p onClick={handleVisualizzaAltro}>
              Visualizza altro
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="rgba(0,0,0,0.5)"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </h3>
        </div>
      )}
      {initialCardCount > 3 && (
  <div className="VisPlus-d">
    <h3 className="VisPlus">
      <p onClick={handleVisualizzaMeno}>
        Visualizza meno
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="rgba(0,0,0,0.5)"
        className="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
      </svg>
    </h3>
  </div>
)}

    </div>
  );
};

export default ConsigliPerTe;
