import './Experiences.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import NewExperience from '../NewExperience/NewExperience'
import { getUserExperiencesAction } from '../../../redux/actions'
import { useParams } from 'react-router-dom'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import EditExperience from '../EditExperience/EditExperience'

const Experiences = () => {
    const [experienceToShow, setExperienceToShow] = useState([])
    const [isNewExperienceOn, setIsNewExperienceOn] = useState(false)
    const experiences = useSelector(state => state.experiences.experiences)
    const loggedUser = useSelector((state) => state.user.userFetch)
    const dispatch = useDispatch()
    let iduser = useParams();
    if(iduser.user === 'me') {
        iduser.user = '65ae3ed3600be100183a8698'
    }
    const urlExperienceToShow = `https://striveschool-api.herokuapp.com/api/profile/${iduser.user}/experiences`

    const handleOpenNewExperience = () => {
        if (isNewExperienceOn) {
            setIsNewExperienceOn(false)
        } else {
            setIsNewExperienceOn(true)
        }
    }

    const handleExperienceFetch = async (url) => {
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
                console.log('Dati experiences caricati con successo')
                setExperienceToShow(data)
              } else {
                console.log('Errore nel caricamento dei dati')
              }
            }
            
        } catch(err) {
            console.log('ERRORE NEL TRY:', err)
        }
    }

    const deleteUserExperience = async (expId) => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/experiences/${expId}` ,{
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    'Content-Type': 'application/json'
                },
            })
            if(res.ok) {
                alert('Esperienza lavorativa eliminata con successo!')
                dispatch(getUserExperiencesAction(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/experiences`))
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    useEffect(() => {
        handleExperienceFetch(urlExperienceToShow)
    },[iduser])

    return(
        <div className='experiences'>
            <div>
                <h2>Experiences</h2> 
                {iduser.user === '65ae3ed3600be100183a8698' ? (<button className='newExperienceButton' onClick={() => handleOpenNewExperience()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#0a66c2" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </button>) : ''}
            </div>
            {iduser.user !== '65ae3ed3600be100183a8698' ? (
                experienceToShow && experienceToShow.length > 0 ? (
                    experienceToShow.map((experience) => {
                        return (
                            <div key={experience._id}>
                                <ExperienceCard experienceData={experience}/>
                            </div>
                        )
                    })
                ) : (<p>Ancora vuoto</p>)
            ) : (
                experiences && experiences.length > 0 ? (
                    experiences.map((experience) => {
                        return (
                            <div  key={experience._id}>
                                <ExperienceCard experienceData={experience}/>
                            </div>
                        )
                    })
                ) : (<p>Ancora vuoto</p>)    
            )}
            {isNewExperienceOn ? (<NewExperience close={handleOpenNewExperience}/>) : ''}
        </div>
    )
}

export default Experiences