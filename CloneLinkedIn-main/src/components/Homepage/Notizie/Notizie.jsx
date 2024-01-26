import "./Notizie.css";

const Notizie = () => {
  return (
    <div id="notizie">
      <div id="perIcona">
        <h4>LinkedIn Notizie</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-info-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
      </div>
      <div>
        <ul className="ulNotizie">
            <li><strong>I 15 lavori in più rapida crescita in Italia</strong><p>Notizie principali - 100 lettori</p></li>
            <li><strong>Dove sta andando la blockchain</strong><p>1 giorno fa</p></li>
            <li><strong>Le città dei lavori in crescita</strong><p>1 giorno fa</p></li>
            <li><strong>SONDAGGIO: Cosa valuti di più in un'...</strong><p>7 ore fa</p></li>
            <li><strong>Un pomodoro per lo spazio</strong><p>4 giorni fa</p></li>
        </ul>
      </div>
      <button>Show more</button>
    </div>
  );
};

export default Notizie;
