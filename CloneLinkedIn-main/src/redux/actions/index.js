export const GET_USER_FETCH = 'GET_USER_FETCH' 
export const GET_USER_EXPERIENCES = 'GET_USER_EXPERIENCES'
export const GET_POST_FETCH = 'GET_POST_FETCH'
export const GET_COMMENTS_FETCH = 'GET_COMMENTS_FETCH'

export const getCommentsFetchAction = () => {
    return async dispatch => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'GET',
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzMGFlYTMxYTczZjAwMTlkNWM3MTYiLCJpYXQiOjE3MDYyMzI1NTUsImV4cCI6MTcwNzQ0MjE1NX0.5ks7-SixhUGTRRJ9zONhM2H4ZgW74Q5vRryFN0UXzFA"
                }
            })
            if(res.ok) {
                const data = await res.json()
                dispatch({
                    type: GET_COMMENTS_FETCH,
                    payload: data
                })
                console.log('Commenti caricati con successo')
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('ERRORE:', (err))
        }
    }
}

export const getPostFetchAction = (url, token) => {
    return async dispatch => {
        try {
            const res = await fetch(url, token)
            if (res.ok) {
                console.log('post fetchati con successo')
                const dataRaw = await res.json()
                const dataReversedSort = dataRaw.reverse()
                const data = dataReversedSort.slice(0,10)
                dispatch({
                    type: GET_POST_FETCH,
                    payload: data
                })
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch (err) {
            console.log('Errore:', err)
        }
    }
}

export const getUserFetchAction = (url, token) => {
    return async dispatch => {
        try {
            const res = await fetch(url, token)
            if (res.ok) {
                console.log('dati fetchati con successo')
                const data = await res.json()
                dispatch({
                    type: GET_USER_FETCH,
                    payload: data
                })
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch (err) {
            console.log('Errore:', err)
        }
    }
}

export const getUserExperiencesAction = (url) => {
    return async dispatch => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
              })
            if (res.ok) {
                console.log('experiences loggedUser fetchate con successo')
                const data = await res.json()
                dispatch({
                    type: GET_USER_EXPERIENCES,
                    payload: data
                })
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }
}