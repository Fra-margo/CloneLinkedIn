import React from "react";
import "./SectionAnalysis.css";

const SectionAnalysis = () => {
  return (
    <div className="FirDiv">
      <div className="SecDiv">
        <h2>Analisi</h2>
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
            className="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg>{" "}
          X visualizzazioni del profilo
        </p>
        <p>Aggiorna il tuo profilo per attrarre visitatori</p>
      </div>
      <div className="ThiDiv">
        <h3>
          <p className="showMoreAnalysis">Mostra tutte le analisi</p>
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

export default SectionAnalysis;
