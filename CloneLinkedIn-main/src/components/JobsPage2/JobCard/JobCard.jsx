import React from 'react';
import './JobCard.css'; 
import JobLogo from '../../Assets/JobLogo.png'
import inlogo from '../../Assets/inlogo.png'
import ProfileIcon from '../../Assets/profileIcon.png'
import CloseIcon from '../../Assets/CloseIcon.png'
import { useSelector } from 'react-redux';

function JobCard({jobData, click}) {
  const loggedUser = useSelector((state) => state.user.userFetch)


  return (
    <div className="job-card" onClick={click}>
        <div className='centerOptimizer'>
        <div className="job-logo">
        {jobData.company_logo_url ? (<img src={jobData.company_logo_url} alt='logoCompany' />) : (<img src={JobLogo} alt="logoCompany" />)}    
      </div>
      <div className="job-info">
        <h2>{jobData.title}</h2>
        <h3>{jobData.category}</h3>
        <p>{jobData.company_name}</p>
        <p> <img src={loggedUser.image} alt="" />Il tuo profilo è in linea con questa offerta di lavoro</p>
        {/* <p>Promosso · <img className='inlogo' src={inlogo} alt="" /> Candidatura semplice</p> */}
      
      </div>

        </div>
        {/* <div className='CloseIcon'><img src={CloseIcon} alt="" /></div> */}
      
      
     
    </div>
  );
}

export default JobCard;
