import './EditProfile.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getUserFetchAction } from '../../../redux/actions'
import { useNavigate } from 'react-router'

const EditProfile = ({close}) => {
    const loggedUser = useSelector((state) => state.user.userFetch)
    const [editedProfile, setEditedProfile] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        bio: '',
        title: '',
        area: ''
      })
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/profile/'
    const token = {
        method: 'PUT',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedProfile),
      }
    const dispatch = useDispatch()

    useEffect(() => {
        if(loggedUser) {
            setEditedProfile(loggedUser)
        }
    },[loggedUser])

    const handleFetchPUT = async () => {
        try {
            const res = await fetch(apiUrl, token)
            if(res.ok) {
                alert('Profilo salvato con successo!')
                dispatch(getUserFetchAction('https://striveschool-api.herokuapp.com/api/profile/me', {
                    method: 'GET',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                      'Content-Type': 'application/json'
                    },
                  }))
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFetchPUT()
        close()
    }

    return (
        <div className='editProfileModulePage'>
            <div>
                <h2>Modifica presentazione</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.7)" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={close}>
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='inputsDiv'>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" value={editedProfile.name} onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="surname">Cognome:</label>
                        <input type="text" name="surname" id="surname" value={editedProfile.surname} onChange={(e) => setEditedProfile({...editedProfile, surname: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={editedProfile.email} onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" value={editedProfile.username} onChange={(e) => setEditedProfile({...editedProfile, username: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <input type="text" name="bio" id="bio" value={editedProfile.bio} onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="title">Titoli:</label>
                        <input type="text" name="title" id="title" value={editedProfile.title} onChange={(e) => setEditedProfile({...editedProfile, title: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="area">Zona:</label>
                        <input type="text" name="area" id="area" value={editedProfile.area} onChange={(e) => setEditedProfile({...editedProfile, area: e.target.value})}/>
                    </div>
                </div> 
                <div className='editProfileButton'>
                    <button>Salva</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile