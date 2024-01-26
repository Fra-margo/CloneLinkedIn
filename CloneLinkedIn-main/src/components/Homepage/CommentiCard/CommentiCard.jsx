import "./CommentiCard.css";
import { useState, useEffect } from "react";
import DeleteComment from "../DeleteComment/DeleteComment";
import EditComment from "../EditComment/EditComment";

const CommentiCard = ({datiComment}) => {
  const [isMyComment, setIsMyComment] = useState(false)
  const [isDeleteOn, setIsDeleteOn] = useState(false)
  const [isEditOn, setIsEditOn] = useState(false)

  const dateTimeString = datiComment.createdAt;
  const dateTime = new Date(dateTimeString);

  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const year = dateTime.getFullYear();
  const date = `${day}/${month}/${year}`;

  useEffect(() => {
    if(isDeleteOn) {
      setIsEditOn(false)
    }
  },[isDeleteOn])

  useEffect(() => {
    if(isEditOn) {
      setIsDeleteOn(false)
    }
  },[isEditOn])

  const handleDelete = () => {
    if(isDeleteOn) {
      setIsDeleteOn(false)
    } else {
      setIsDeleteOn(true)
    }
  }

  const handleEdit = () => {
    if(isEditOn) {
      setIsEditOn(false)
    } else {
      setIsEditOn(true)
    }
  }

  useEffect(() => {
    if(datiComment.author === 'BW3Team6@epicode.it') {
      setIsMyComment(true)
    }
  },[datiComment])

  return (
    <>
    {isDeleteOn ? (<DeleteComment commentData={datiComment} close={handleDelete}/>) : ''}
    {isEditOn ? (<EditComment commentData={datiComment} close={handleEdit}/>) : ''}
    <div>
      <div id="contenitoreFotoCommento">
        <div id="foto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>
        <div id="contenitoreCommento">
          <div id="nome">
            <p id="h4">
              <strong>{datiComment.author}</strong>
            </p>
            <p id="pGiorno">
              {time} del {date}
            </p>
          </div>
          <p id="pPiccolo">Titolo utente</p>
          <p className="commentText">{datiComment.comment}</p>
          <p id="pBlu"><strong>Vedi traduzione</strong></p>
          {isMyComment ? (
          <div className="editAndDeleteComment">
            <button onClick={handleEdit}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
              </svg>
            </button>
            <button onClick={handleDelete}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
              </svg>
            </button>
          </div>
        ) : ''}
        </div>
      </div>
      {!isMyComment ? (
      <div id="consiglia">
        <p>Consiglia | Rispondi</p>
      </div>) : ''} 
    </div>
    </>
    
  );
};

export default CommentiCard;