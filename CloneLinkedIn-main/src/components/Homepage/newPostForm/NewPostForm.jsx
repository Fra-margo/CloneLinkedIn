import './NewPostForm.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPostFetchAction } from '../../../redux/actions'

const NewPostForm = ({close}) => {
    const [newPostText, setNewPostText] = useState({
        text: ''
    })
    const dispatch = useDispatch()
    const loggedUser = useSelector((state) => state.user.userFetch)
    const apiUrlPost = 'https://striveschool-api.herokuapp.com/api/posts/'
    const token = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
          'Content-Type': 'application/json'
        },
      }

    const createNewPost = async (data) => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                })
            if (res.ok) {
                dispatch(getPostFetchAction(apiUrlPost, token))
                alert('Post creato con successo')
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleSubmitPost = (e) => {
        e.preventDefault()
        createNewPost(newPostText)
        close()
    }

    return (
        <div className='newPostForm'>
            <div>
                <div className='closePostForm'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.5)" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={close}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                <div className='newPostFormTop'>
                    <img src={loggedUser.image} alt="profilePic" />
                    <div>
                        <h2>{loggedUser.username}</h2>
                        <p>Pubblica: Chiunque</p>
                    </div>
                </div>
                <form onSubmit={(e) => handleSubmitPost(e)}>
                    <textarea placeholder='Di cosa vorresti parlare?' value={newPostText.text} onChange={(e) => setNewPostText({text: e.target.value})}/>
                    <button className='publishPostBtn' disabled={newPostText.text.length < 3}>Pubblica</button>
                </form>
            </div>
        </div>
    )
}

export default NewPostForm