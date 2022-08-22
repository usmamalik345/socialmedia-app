import React from 'react'
import "./Feed.css"
import Share from "../share/Share"
import Post from '../Post/Post'
import { Posts } from "../../Dummydata"

const Feed = () => {
  return (
    <div className='feeds'>
          <div className="feedWrapper">
            <Share />
            
            {Posts.map((p) => (
              <Post  key={p.id} post={p}/>
            ))}
            
           
          </div>

    </div>
  )
}

export default Feed