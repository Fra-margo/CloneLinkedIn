// React Component
import React from "react";
import "./WelcomeMessage.css";
import add from "../../Assets/add.png";
import element from "../../Assets/element.png";
import camera from "../../Assets/camera.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WelcomeMessage = () => {
  const loggedUser = useSelector((state) => state.user.userFetch);
  const navigate = useNavigate()

  return (
    <div className="welcome-container">
      <div className="topProfile">
        <div className="profile-photo">
          <img
            className="camera"
            src={loggedUser ? loggedUser.image : camera}
            alt=""
            onClick={() => navigate('/profile/me')}
          />
        </div>
      </div>

      <h1>Bentornato {loggedUser.username}!</h1>
      <hr />
      <div className="network-expand">
        <div>
          <p>Collegamenti</p>
          <span>
            <p>Espandi la tua rete</p>
          </span>
        </div>
        <div>
          <img className="addIcon" src={add} alt="" />
        </div>
      </div>

      <hr />
      <div className="elementContainer">
        <div className="elementicon">
          <img className="element" src={element} alt="" />
        </div>
        <div>
          <span>
            <p>I miei elementi</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
