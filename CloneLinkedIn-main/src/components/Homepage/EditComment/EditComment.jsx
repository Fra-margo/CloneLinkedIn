import './EditComment.css'
import { getCommentsFetchAction } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const EditComment = ({commentData, close}) => {
    const [editedComment, setEditedComment] = useState({
        comment: '',
        rate: '',
        elementId: ''
    })
    const dispatch = useDispatch()
    const loggedUser = useSelector((state) => state.user.userFetch)
    const urlEditComment = `https://striveschool-api.herokuapp.com/api/comments/${commentData._id}`

    useEffect(() => {
        if(commentData)
        setEditedComment({
            comment: commentData.comment,
            rate: commentData.rate,
            elementId: commentData.elementId
        })
    },[commentData])

    const handleEditComment = async (comment) => {
        try {
            const res = await fetch(urlEditComment, {
                method: 'PUT',
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzMGFlYTMxYTczZjAwMTlkNWM3MTYiLCJpYXQiOjE3MDYyMzI1NTUsImV4cCI6MTcwNzQ0MjE1NX0.5ks7-SixhUGTRRJ9zONhM2H4ZgW74Q5vRryFN0UXzFA",
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment),
            })
            if(res.ok) {
                dispatch(getCommentsFetchAction())
                alert('Commento modificato con successo!')
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('ERRORE:', err)
        }
    }

    const handleSubmitEditComment = (e) => {
        e.preventDefault()
        if(editedComment.comment.length > 2) {
            handleEditComment(editedComment)
        }
        close()
    }

    return (
        <div className='editComment'>
            <div>
                <div className='closeEditComment' onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                <div>
                    <img src={loggedUser.image} alt="profilePic" />
                    <h2>Modifica il commento</h2>
                </div>
                <form onSubmit={(e) => handleSubmitEditComment(e)}>
                    <textarea value={editedComment.comment} placeholder='Di cosa vorresti parlare?' onChange={(e) => setEditedComment({...editedComment, comment: e.target.value})} />
                    <button className='publishEditCommentBtn' disabled={editedComment.comment.length < 3}>Pubblica</button>
                </form>    
            </div>      
        </div>
    )
}

export default EditComment