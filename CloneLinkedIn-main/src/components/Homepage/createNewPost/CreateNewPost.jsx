import './CreateNewPost.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import NewPostForm from '../newPostForm/NewPostForm'

const CreateNewPost = () => {
    const [isNewPostOn, setIsNewPostOn] = useState()
    const loggedUser = useSelector((state) => state.user.userFetch)

    
    const handleNewPost = () => {
        if(isNewPostOn) {
            setIsNewPostOn(false)
        } else {
            setIsNewPostOn(true)
        }
    }

    return (
        <>
        <div className='createNewPost'>
            <div>
                <img src={loggedUser.image} alt='ImgProfilo' />
                <button onClick={() => handleNewPost()}>Avvia un post</button>
            </div>
            <div className='newPostIcons'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0a66c2" className="bi bi-card-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <p>Contenuti multimediali</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#c37d16" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                        <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg>
                    <p>Evento</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e06847" className="bi bi-text-paragraph" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <p>Scrivi un articolo</p>
                </div>
            </div>
        </div>
        {isNewPostOn ? (<NewPostForm close={handleNewPost}/>) : ''}
        </>
        
    )
}

export default CreateNewPost