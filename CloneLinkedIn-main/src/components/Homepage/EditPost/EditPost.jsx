import './EditPost.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostFetchAction } from '../../../redux/actions'

const EditPost = ({postData, close}) => {
    const [postPic, setPostPic] = useState(null)
    const [editPostText, setEditPostText] = useState({
        text: ''
    })
    const loggedUser = useSelector((state) => state.user.userFetch)
    const dispatch = useDispatch()
    const apiUrlPost = 'https://striveschool-api.herokuapp.com/api/posts/'
    const tokenGET = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
          'Content-Type': 'application/json'
        },
      }

    useEffect(() => {
        setEditPostText({text: postData.text})
    },[])

    const handlePostPicUpload = async () => {
        if (postPic) {
            const formData = new FormData()
            formData.append('post', postPic)
            try {
                const res = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postData._id}`, {
                    method: 'POST',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    },
                    body: formData,
                  })
                  if (res.ok) {
                    console.log('Immagine caricata con successo!')
                    dispatch(getPostFetchAction('https://striveschool-api.herokuapp.com/api/posts/', {
                    method: 'GET',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                      'Content-Type': 'application/json'
                    },
                    }))
                    setPostPic(null)
                  } else {
                    console.log('Errore nel caricamento dati')
                  }
            } catch(err) {
                console.log('Errore:', err)
            }     
        }
    }

    const editPostFetch = async (data) => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postData._id}`, {
                method: 'PUT',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
              })
            if(res.ok) {
                dispatch(getPostFetchAction(apiUrlPost, tokenGET))
                alert('Post modificato con successo!')
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleSubmitEditPost = (e) => {
        e.preventDefault()
        editPostFetch(editPostText)
        if (postPic) {
            handlePostPicUpload()
        }
        close()
    }

    return (
        <div className='editPost'>
            <div>
                <div className='newPostUploadImg'>
                    <label htmlFor="editPostPic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0a66c2" className="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                        </svg>
                        </label>
                    <input className='inputPostPic' type='file' id='editPostPic' name='editPostPic' accept='image/png, image/jpg, image/gif' onChange={(e) => setPostPic(e.target.files[0])} />
                </div>
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
                <form onSubmit={(e) => handleSubmitEditPost(e)}>
                    <textarea placeholder='Di cosa vorresti parlare?' value={editPostText.text} onChange={(e) => setEditPostText({text: e.target.value})}/>
                    <button className='publishPostBtn' disabled={editPostText.text.length < 3}>Pubblica</button>
                </form>
            </div>
        </div>
    )
}

export default EditPost