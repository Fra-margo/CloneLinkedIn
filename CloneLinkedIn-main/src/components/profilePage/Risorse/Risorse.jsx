import React from "react";
import "./Risorse.css";

const Risorse = () => {
  return (
    <div className="FirstDiv">
      <div className="SecondDiv1">
        <h2>Risorse</h2>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ccc"
            className="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>{" "}
          Solo per te
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="black"
            className="bi bi-broadcast-pin"
            viewBox="0 0 16 16"
          >
            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8" />
          </svg>
          Modalità di creazione di contenuti <button> NO </button>
        </p>
        <p className="spaceP">
          Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi
          agli strumenti di creazione
        </p>
<div className="hrDiv"></div>
        <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
          La mia rete 
        </p>
        <p className="spaceP">
          Salva e gestisci i tuoi collegamenti e interessi.
        </p>
      </div>
      <div className="ThiDiv">
        <h3>
          <p className="showMoreSectAnalysis">Mostra tutte le risorse</p>
          <i>
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
          </i>
        </h3>
      </div>
    </div>
  );
};

export default Risorse;
