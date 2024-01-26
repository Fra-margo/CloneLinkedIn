import './PostContainer.css'
import PostCard from '../PostCard/PostCard'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const PostContainer = () => {
    const fetchedPosts = useSelector((state) => state.post.postFetch)

    return(
        <div className='postCardContainer'>
            {fetchedPosts ? (
                fetchedPosts.map((post) => {
                    return <PostCard key={post._id} datiPost={post} />
                })
            ) : (<p>Loading...</p>)}
        </div>
    )
}

export default PostContainer