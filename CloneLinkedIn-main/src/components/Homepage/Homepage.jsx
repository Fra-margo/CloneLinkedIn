import ConsigliPerTe from './ConsigliPerte/ConsigliPerTe'
import './Homepage.css'
import GruppiEventiHastag from './GruppiEventiHastag/GruppiEventiHastag'
import Minifooter from './MiniFooter/MiniFooter'
import BigFooter from './BigFooter/BigFooter'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import WelcomeMessage from './WelcomeMessage/WelcomeMessage'
import Notizie from './Notizie/Notizie'
import MyHeader from '../MyHeader/MyHeader'
import CreateNewPost from './createNewPost/CreateNewPost'
import PostContainer from './PostContainer/PostContainer'
import { getUserFetchAction } from '../../redux/actions'
import { getPostFetchAction } from '../../redux/actions'
import { getCommentsFetchAction } from '../../redux/actions'


const Homepage = () => {
    const [isFooterOn, setIsFooterOn] = useState(false)
    const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/me`
    const apiUrlPost = 'https://striveschool-api.herokuapp.com/api/posts/'
    const token = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
          'Content-Type': 'application/json'
        },
      }
    const dispatch = useDispatch()

    const handleBigFooter = () => {
        if(isFooterOn) {
            setIsFooterOn(false)
        } else {
            setIsFooterOn(true)
        }     
    }

    useEffect(() => {
        dispatch(getUserFetchAction(apiUrl, token))
        dispatch(getPostFetchAction(apiUrlPost, token))
        dispatch(getCommentsFetchAction())
    },[])
    
    return (
        <>
      <MyHeader />
       {isFooterOn ? (<BigFooter close={handleBigFooter} />) : ""} 
        <div className='homepage'>      
            <div className='homepageLeft'>
                <WelcomeMessage/>
                <GruppiEventiHastag />               
                {/* LEFT */}     
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    <CreateNewPost/>
                    <ConsigliPerTe />
                    <PostContainer />
                    {/* CENTER */}
                    
                </div>
                <div className='homepageRight'>
                    <Notizie />
                    <Minifooter open={handleBigFooter}/> 
                    
                    {/* RIGHT */}
                </div>
            </div>
        </div>
     </>
    )
}

export default Homepage