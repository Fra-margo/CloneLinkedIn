import './EditExperience.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserExperiencesAction } from '../../../redux/actions'

const EditExperience = ({experience, close}) => {
    const loggedUser = useSelector((state) => state.user.userFetch)
    const [experiencePic, setExperiencePic] = useState(null)
    const [experienceData, setExperienceData] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: ''
      })
    const dispatch = useDispatch()

    const handleExperiencePicUpload = async () => {
        if (experiencePic) {
            const formData = new FormData()
            formData.append('experience', experiencePic)
            try {
                const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${experience.user}/experiences/${experience._id}/picture`, {
                    method: 'POST',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    },
                    body: formData,
                  })
                  if (res.ok) {
                    console.log('Immagine caricata con successo!')
                    dispatch(getUserExperiencesAction('https://striveschool-api.herokuapp.com/api/profile/65ae3ed3600be100183a8698/experiences', {
                    method: 'GET',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                      'Content-Type': 'application/json'
                    },
                    }))
                    setExperiencePic(null)
                  } else {
                    console.log('Errore nel caricamento dati')
                  }
            } catch(err) {
                console.log('Errore:', err)
            }     
        }
    }

    const handleEditExperience = async (data) => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/65ae3ed3600be100183a8698/experiences/${experience._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(res.ok) {
                alert('Profilo salvato con successo!')
                dispatch(getUserExperiencesAction('https://striveschool-api.herokuapp.com/api/profile/65ae3ed3600be100183a8698/experiences'))
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEditExperience(experienceData)
        if(experiencePic) {
            handleExperiencePicUpload()
        }
        close()
    }

    return (
        <div className='editExperience'>
            <div>
                <h1>Modifica esperienza lavorativa</h1>
                <button onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.7)" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="role">Ruolo:</label>
                    <input type="text" name="role" id="role" value={experienceData.role || ''} onChange={(e) => setExperienceData({
                        ...experienceData, role: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="company">Azienda:</label>
                    <input type="text" name="company" id="company" value={experienceData.company || ''} onChange={(e) => setExperienceData({
                        ...experienceData, company: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="startDate">Data di inizio:</label>
                    <input type="date" name="startDate" id="startDate" value={experienceData.startDate ? experienceData.startDate.split('T')[0] : ''} onChange={(e) => setExperienceData({
                        ...experienceData, startDate: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="endDate">Fino a:</label>
                    <input type="date" name="endDate" id="endDate" value={experienceData.endDate ? experienceData.endDate.split('T')[0] : ''} onChange={(e) => setExperienceData({
                        ...experienceData, endDate: e.target.value
                    })}/>
                </div>
                <div>
                   <label htmlFor="description">Descrizione:</label>
                    <input type="text" name="description" id="description" value={experienceData.description || ''} onChange={(e) => setExperienceData({
                        ...experienceData, description: e.target.value
                    })}/> 
                </div>
                <div>
                    <label htmlFor="area">Zona:</label>
                    <input type="text" name="area" id="area" value={experienceData.area || ''} onChange={(e) => setExperienceData({
                        ...experienceData, area: e.target.value
                    })}/>
                </div> 
                <button type='submit'>Invia</button>
                <div className='newExperienceUploadImg'>
                    <label htmlFor="editPostPic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0a66c2" className="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                        </svg>
                        </label>
                    <input className='inputPostPic' type='file' id='editPostPic' name='editPostPic' accept='image/png, image/jpg, image/gif' onChange={(e) => setExperiencePic(e.target.files[0])} />
                </div>
            </form>
        </div>
    )
}

export default EditExperience