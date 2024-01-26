import "./DettagliLavoro.css";
import { useEffect, useState } from "react";

const DettagliLavoro = ({jobData, close}) => {
  

  const dateString = jobData.publication_date;
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const publicationDate = `${day}-${month}-${year}`

  return (
    <div id="contenitorePrincipale">
      <div>
        <div className="dettagliLavoroTop">
          <h2>{jobData.title}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.8)" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={close}>
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        </div>
        <p>{jobData.company_name} - {publicationDate}</p>
      </div>
      <div id="tipi">
        <div className="icone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-bag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
          </svg>
          <p>{jobData.job_type}</p>
        </div>
        <div className="icone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-stopwatch"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
          </svg>
          <p>{jobData.candidate_required_location}</p>
        </div>
        <div className="icone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-currency-euro"
            viewBox="0 0 16 16"
          >
            <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936q-.002-.165.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.6 6.6 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
          </svg>
          <p>{jobData.salary}</p>
        </div>
      </div>
      <div>
        <button id="button1">Candidatura semplice</button>
        <button id="button2">Salva</button>
      </div>
      <div id="descrizione" dangerouslySetInnerHTML={{ __html: jobData.description }}>
      </div>
    </div>
  );
};

export default DettagliLavoro;
