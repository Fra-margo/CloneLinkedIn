import "./ReccommendedForYou.css";
import { useNavigate } from "react-router-dom";
const ReccommendedForYou = () => {
  const navigate = useNavigate();
  return (
    <div className="recommendedForYou">
      <div className="firstH2andP">
        <h2>Consigliato per te</h2>
        <p>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
      </div>
      <div className="secondRecommended">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          fill="#F8C77E"
          className="bi bi-briefcase-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
        </svg>
        <h3>Vuoi altre offerte di lavoro?</h3>
        <p>
          Clicca qui per continuare a cercare tra oltre 20 milioni di offerte di
          lavoro su LinkedIn
        </p>
        <button onClick={() => navigate("/jobspage2/developer")}>
          Cerca offerte di lavoro
        </button>
      </div>
    </div>
  );
};
export default ReccommendedForYou;
