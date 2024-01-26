import './NewExperience.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserExperiencesAction } from '../../../redux/actions'

const NewExperience = ({close}) => {
    const loggedUser = useSelector((state) => state.user.userFetch)
    const [newExperience, setNewExperience] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: ''
    })
    const dispatch = useDispatch()

    const postUserExperience = async (url, data) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                })
            if (res.ok) {
                alert('Esperienza lavorativa salvata con successo')
                dispatch(getUserExperiencesAction(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/experiences`))
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newExperience.role && newExperience.company && newExperience.startDate && newExperience.description && newExperience.area) {
            postUserExperience(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/experiences`, newExperience)
            close()
        } else {
            alert('Compila tutti i campi (endDate non è necessario)')
        }  
    }

    return (
        <div className='newExperience'>
            <div>
                <h1>Nuova esperienza:</h1>
                <button onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.7)" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="role">Ruolo:</label>
                    <input type="text" name="role" id="role" onChange={(e) => setNewExperience({
                        ...newExperience, role: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="company">Azienda:</label>
                    <input type="text" name="company" id="company" onChange={(e) => setNewExperience({
                        ...newExperience, company: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="startDate">Data di inizio:</label>
                    <input type="date" name="startDate" id="startDate" onChange={(e) => setNewExperience({
                        ...newExperience, startDate: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="endDate">Fino a:</label>
                    <input type="date" name="endDate" id="endDate" onChange={(e) => setNewExperience({
                        ...newExperience, endDate: e.target.value
                    })}/>
                </div>
                <div>
                   <label htmlFor="description">Descrizione:</label>
                    <input type="text" name="description" id="description" onChange={(e) => setNewExperience({
                        ...newExperience, description: e.target.value
                    })}/> 
                </div>
                <div>
                    <label htmlFor="area">Zona:</label>
                    <input type="text" name="area" id="area" onChange={(e) => setNewExperience({
                        ...newExperience, area: e.target.value
                    })}/>
                </div> 
                <button type='submit'>Invia</button>
            </form>
        </div>
    )
}

export default NewExperience