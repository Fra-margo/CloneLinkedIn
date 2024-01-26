import './DeleteComment.css'
import { getCommentsFetchAction } from '../../../redux/actions'
import { useDispatch } from 'react-redux'

const DeleteComment = ({commentData, close}) => {
    const dispatch = useDispatch()
    const urlDeleteComment = `https://striveschool-api.herokuapp.com/api/comments/${commentData._id}`
    const tokenDELETE = {
        method: 'DELETE',
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzMGFlYTMxYTczZjAwMTlkNWM3MTYiLCJpYXQiOjE3MDYyMzI1NTUsImV4cCI6MTcwNzQ0MjE1NX0.5ks7-SixhUGTRRJ9zONhM2H4ZgW74Q5vRryFN0UXzFA",
        'Content-Type': 'application/json'
        }
    }

    const handleDeleteComment = async () => {
        try {
            const res = await fetch(urlDeleteComment, tokenDELETE)
            if(res.ok) {
                dispatch(getCommentsFetchAction())
                alert('Commento eliminato con successo!')
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('ERRORE:', err)
        }
    }

    return(
        <div className='deleteComment'>
            <p>Vuoi davvero eliminare questo commento?</p>
            <div>
                <button onClick={() => handleDeleteComment()}>Si</button>
                <button onClick={close}>No</button>
            </div>
        </div>
    )
}

export default DeleteComment