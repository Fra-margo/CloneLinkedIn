import { useEffect, useState } from "react";
import pen from "../../Assets/pen_edit_icon_177296.png";
import "./ActivityComponent.css";
import { useParams } from "react-router-dom";

const ActivityComponent = () => {
  const [followers, setFollowers] = useState(0);
  const [posts, setPosts] = useState([]);
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
    <div className="activity-component">
      <div className="Activity-post">
        <h2>Attività</h2>
        {showEdits ? (
        <div className="post-btn">
          <button className="create-post-button">Crea un post</button>
          <img src={pen} alt="" className="penImg" />
        </div>) : ''}
      </div>

      <div className="followers">{followers} follower</div>
      {posts.length > 0 ? (
        <div>
          <h3>I post che condividi appariranno qui</h3>
          {}
        </div>
      ) : (
        <div>
          <h3>Non hai ancora pubblicato nulla</h3>
          <p>I post che condividi appariranno qui</p>
        </div>
      )}
      <hr
        style={{ borderColor: "gray", borderWidth: "0.5px", margin: "20px 0" }}
      />

      <p className="show-all-activities">
        Mostra tutte le attività
      </p>
    </div>
  );
};

export default ActivityComponent;
