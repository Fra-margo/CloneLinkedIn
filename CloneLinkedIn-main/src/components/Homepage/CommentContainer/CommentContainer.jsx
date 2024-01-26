import './CommentContainer.css'
import CommentiCard from '../CommentiCard/CommentiCard'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getCommentsFetchAction } from '../../../redux/actions'
import { useDispatch } from 'react-redux'

const CommentContainer = ({postData}) => {
    const [commentToSend, setCommentToSend] = useState({
        comment: '',
        rate: 1,
        elementId: postData._id,
    })
    const [postComments, setPostComments] = useState([])
    const [idPost, setIdPost] = useState('')
    const loggedUser = useSelector((state) => state.user.userFetch)
    const comments = useSelector((state) => state.comments.comments)
    const dispatch = useDispatch()

    const handlePostComment = async () => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzMGFlYTMxYTczZjAwMTlkNWM3MTYiLCJpYXQiOjE3MDYyMzI1NTUsImV4cCI6MTcwNzQ0MjE1NX0.5ks7-SixhUGTRRJ9zONhM2H4ZgW74Q5vRryFN0UXzFA",
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentToSend),
            })
            if(res.ok) {
                dispatch(getCommentsFetchAction())
                setCommentToSend({...commentToSend, comment: ''})
                alert('Commento postato con successo')
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('ERRORE:', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(commentToSend.comment !== '') {
            handlePostComment()
        } else {
            alert('Scrivi qualcosa')
        }
    }

    useEffect(() => {
        const filteredComments = comments.filter(comment => comment.elementId === postData._id);
        setPostComments(filteredComments);
    }, [comments, postData._id]);

    return (
        <div className='commentsContainer'>
            <div className='postCommentBox'>
                <div className='postNewCommentInput'>
                <img src={loggedUser.image} alt='imgProfilo' />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="commentInput" id="commentInput" value={commentToSend.comment} onChange={(e) => setCommentToSend({...commentToSend, comment: e.target.value})}/> 
                </form>
                </div>
                <div className='postComments'>
                    {postComments && postComments.length > 0 ? (
                        postComments.map((comment) => {
                            return <CommentiCard key={comment._id} datiComment={comment} />
                        })
                    ) : <p className='noComments'>Scrivi tu il primo commento</p>}
                </div>
            </div>
        </div>
    )
}

export default CommentContainer