import "./MiniFooter.css";
import { useState, useEffect } from "react";
import BigFooter from "../BigFooter/BigFooter";

const Minifooter = ({open}) => {
  return (
    <div className="miniFooter">
      <div className="miniFooterList">
        <p>Informazioni</p> <p>Accesibilità</p>
      </div>
      <div className="miniFooterList">
        <p>Centro assistenza</p>{" "}
        <p>
          Privacy e condizioni{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </p>
      </div>
      <div className="miniFooterList">
        <p>Opzioni per gli annunci pubblicitari</p>
      </div>
      <div className="miniFooterList">
        <p>Pubblicità</p>{" "}
        <p>
          Servizi alle aziende{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </p>
      </div>
      <div className="miniFooterList">
        <p>Scarica l'app LinkedIn</p> <p onClick={open}>Altro</p>
      </div>
      <p className="lastP">
        <span>
          Linked
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#0a66c2"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>{" "}
        </span>
        LinkedIn Corporation &copy; 2024
      </p>
    </div>
  );
};
export default Minifooter;
