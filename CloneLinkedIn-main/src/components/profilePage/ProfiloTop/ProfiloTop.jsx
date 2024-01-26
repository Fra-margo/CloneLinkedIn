import './ProfiloTop.css'
import { Link } from 'react-router-dom'
import EditProfile from '../EditProfile/EditProfile'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserFetchAction } from '../../../redux/actions'

const ProfiloTop = () => {
    const [userToShow, setUserToShow] = useState({})
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [profilePic, setProfilePic] = useState(null)
    const iduser = useParams()
    const loggedUser = useSelector((state) => state.user.userFetch)
    const urlUserToShow = `https://striveschool-api.herokuapp.com/api/profile/${iduser.user}`
    const dispatch = useDispatch()
    
    const handleProfilePicChange = (e) => {
        setProfilePic(e.target.files[0])
    }

    const handleProfileFetch = async (url) => {
        try {
            if(iduser) {
               const res = await fetch(url, {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
              })
              if(res.ok) {
                const data = await res.json()
                console.log('Dati profilo caricati con successo')
                setUserToShow(data)
              } else {
                console.log('Errore nel caricamento dei dati')
              }
            }
            
        } catch(err) {
            console.log('ERRORE NEL TRY:', err)
        }
    }

    const handleProfilePicUpload = async (e) => {
        e.preventDefault()
        if (profilePic) {
            const formData = new FormData()
            formData.append('profile', profilePic)
            try {
                const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/picture`, {
                    method: 'POST',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    },
                    body: formData,
                  })
                  if (res.ok) {
                    alert('Immagine caricata con successo!')
                    dispatch(getUserFetchAction('https://striveschool-api.herokuapp.com/api/profile/me', {
                    method: 'GET',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                      'Content-Type': 'application/json'
                    },
                    }))
                    setProfilePic(null)
                  } else {
                    console.log('Errore nel caricamento dati')
                  }
            } catch(err) {
                console.log('Errore:', err)
            }     
        }
    }

    useEffect(() => {
        handleProfileFetch(urlUserToShow)
    },[iduser])

    const handleOpenEditPage = () => {
        setIsEditOpen(true)
    }

    const handleCloseEditPage = () => {
        setIsEditOpen(false)
    }

    return (
        <div className='profiloTop'>
            {isEditOpen ? (<EditProfile close={handleCloseEditPage}/>) : ''}
            <div className='photoBg'>
                <img src="https://static.vecteezy.com/system/resources/previews/026/307/268/non_2x/cool-plain-blue-abstract-background-hd-wallpaper-design-free-vector.jpg" alt="bgimg" />
            </div>
            {iduser.user === '65ae3ed3600be100183a8698' ? (
                <>
                <div className='editPhoto'>
                    <label htmlFor="editProfilePic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a66c2" className="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                        </svg>
                    </label>
                    <input className='inputFile' type='file' id='editProfilePic' name='editProfilePic' accept='image/png, image/jpg, image/gif' onChange={(e) => handleProfilePicChange(e)} />
                </div> 
                {profilePic ? (
                    <>
                    <div className='uploadPhotoDiv'>
                    <button onClick={(e) => handleProfilePicUpload(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={profilePic !== null ? 'green' : 'gray'} className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </button>
                </div>
                    </>
                ) : ''}                
                </>
            ) : ''}
            <div className='profilePic'>               
                {userToShow ? (
                    iduser.user === '65ae3ed3600be100183a8698' ? (
                        <img src={loggedUser.image} alt={loggedUser.name}/>
                        ) : (
                        <img src={userToShow.image} alt={userToShow.name}/>
                        )
                ) : (<p>Loading...</p>)}
            </div>
            {iduser.user === '65ae3ed3600be100183a8698' ? (
                <div className='editProfile'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#404040" className="bi bi-pencil" viewBox="0 0 16 16" onClick={() => handleOpenEditPage()}>
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                    </svg>
                </div>  
            ) : ''}
            <div className='profileText'>
                <div className='workingAgency'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1e1e1e" className="bi bi-buildings" viewBox="0 0 16 16">
                        <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                        <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                    </svg>
                    <p>EPICODE</p>
                </div>
                <div className='profileMainText'>
                    <h2>{iduser.user === '65ae3ed3600be100183a8698' ? (
                        loggedUser.username
                    ) : (
                        userToShow.username
                    )}
                        </h2>
                    <p>
                    {iduser.user === '65ae3ed3600be100183a8698' ? (
                        <>
                        {loggedUser.title} presso {loggedUser.area}
                        </>
                        ) : (
                            <>
                            {userToShow.title} presso {userToShow.area}  
                            </>
                        )}
                    </p>
                    <p>
                    {iduser.user === '65ae3ed3600be100183a8698' ? (
                        loggedUser.bio
                    ) : (
                        userToShow.bio
                    )}
                    </p>
                    <p>
                    {iduser.user === '65ae3ed3600be100183a8698' ? (
                        <>
                        {loggedUser.area} • <Link to='/'>Informazioni di contatto</Link>
                        </>
                        ) : (
                        <>
                        {userToShow.area} • <Link to='/'>Informazioni di contatto</Link>
                        </>
                        )} 
                    </p> 
                </div>
                {iduser.user === '65ae3ed3600be100183a8698' ? (
                    <div className='profileButtons'>
                        <button>Disponibile per</button>
                        <button>Aggiungi sezione profilo</button>
                        <button>Aggiungi pulsante personalizzato</button>
                        <button>Altro</button>
                    </div>
                ) : ''}
            </div>    
        </div>
    )
}

export default ProfiloTop