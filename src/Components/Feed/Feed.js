import React from 'react'
import "./Feed.css"
import Share from "../share/Share"
import Post from '../Post/Post'


const Feed = () => {
  return (
    <div className='feeds'>
          <div className="feedWrapper">
            <Share />
            <Post />
           
          </div>

    </div>
  )
}

export default Feed