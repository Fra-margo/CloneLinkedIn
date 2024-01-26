import React, { useState, useEffect} from "react";

import "./SelezioneInCorso.css";

const SelezioneInCorso = () => {
  const [jobsData, setJobsData] = useState([]);
  const [initialCardCount, setInitialCardCount] = useState(3);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4CI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE",
              "Content-Type": "application/json",
            },
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
    <div className="SelezioneInCorso">
      <div>
        <h2 className="SelezioneH">Selezione in corso</h2>
        <p className="SelezioneP">Offerte di lavoro che potrebbero esserti sfuggite</p>
        {jobsData.slice(0, initialCardCount).map((job, index) => (
          <div key={index} className="cardConsigli">
            <img src="./logo192.png" alt="img" />
            <div className="cardConsigliDettagli">
              <h3 className="TitoliLavoriSelez">{job.title}</h3>
              <p className="PSelezLav">{job.company_name}</p>
              <p className="PSelezLav2">{job.candidate_required_location}</p>
              <p className="PSelezLav3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg> Pubblicato il {job.publication_date}  </p>
<p className="PSelezLav4">Promosso da <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0a66c2" className="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg> </p>
            </div>
            <div>
              <strong className="card-buttonX" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="gray"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </strong>
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

export default SelezioneInCorso;
