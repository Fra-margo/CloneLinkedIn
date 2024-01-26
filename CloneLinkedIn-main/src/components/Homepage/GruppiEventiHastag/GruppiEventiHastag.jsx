import './GruppiEventiHastag.css'
const GruppiEventiHastag = () => {
    return(
        <div className='gruppiEventiHastag'>
            <div className='flexiFriend'>
                <div className='ulList'>
                    <ul>
                        <li><a href="#">Gruppi</a></li>
                        <li><a href="#">Eventi</a></li>
                        <li><a href="#">Hastag seguiti</a></li>
                    </ul>
                </div>
                <div className='plusDiv'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </svg>
                </div>
            </div>
            <div>
                <h2 className='learnMore'>Scopri di più</h2>
            </div>
        </div>
    )
}
export default GruppiEventiHastag