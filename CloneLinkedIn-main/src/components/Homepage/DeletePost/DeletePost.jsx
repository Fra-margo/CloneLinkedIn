import './DeletePost.css'
import { useSelector, useDispatch } from 'react-redux'
import { getPostFetchAction } from '../../../redux/actions'

const DeletePost = ({postData, close}) => {
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

    const handleDeleteFetch = async () => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postData._id}`, {
                method: 'DELETE',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
              })
            if(res.ok) {
                dispatch(getPostFetchAction(apiUrlPost, tokenGET))
                alert('Post eliminato con successo!')
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleDeletePost = () => {
        handleDeleteFetch()
        close()
    }

    return (
        <div className='deletePost'>
            <p>Vuoi davvero eliminare questo post?</p>
            <div>
                <button onClick={() => handleDeletePost()}>Si</button>
                <button onClick={close}>No</button>
            </div>
        </div>
    )
}

export default DeletePost