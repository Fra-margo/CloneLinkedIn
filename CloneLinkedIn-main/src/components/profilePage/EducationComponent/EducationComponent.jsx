import React from 'react';
import './EducationComponent.css'; 
import logouni from '../../Assets/logouni.png'
import pen from '../../Assets/pen_edit_icon_177296.png'
import Plus from '../../Assets/Plus.png'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const EducationComponent = () => {
  const [showEdits, setShowEdits] = useState(false)
  const idutente = useParams()

  useEffect(() => {
    if(idutente.user === '65ae3ed3600be100183a8698' || idutente.user === 'me') {
      setShowEdits(true)
    } else {
      setShowEdits(false)
    }
  },[idutente])

  return (
    <div className="education-container">
      <div className="title-section">
        <h2>Formazione</h2>
        {showEdits ? (
          <div className="icons">
            <img className='Plus' src={Plus} alt="" />
            <img  src={pen} alt="" />
          </div>) : ''} 
      </div>
      <div className="education-entry">
        
        <div className="education-details">
          
        <img className='logo' src={logouni} alt=""  />
        <div>
        <h3>Università degli stranieri di Perugia</h3>
          <p>Diploma Istituto Tecnico e Professionale, Graphic Design</p>
          <p>2016 - 2020</p>

        </div>
         
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
