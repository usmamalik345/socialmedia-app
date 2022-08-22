import React, { useState } from 'react'
import "./Post.css"
import {HiDotsVertical} from "react-icons/hi"
import {Users} from "../../Dummydata"


const Post = ({post}) => {
    const [ count , setCount ] = useState(post.like)
    const incremntCount = () => {
        setCount(count => count + 1)

    } 

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopleft">
                    <img className='postImg' src={ Users.filter((u) => u.id === post.userId)[0].profilePicture   } alt="asa" />
                    <span className="postUserName"> {Users.filter( (u) => u.id === post.userId)[0].username} </span>
                    <span className="postDate"> {post.date}  </span>
                </div>
                <div className="postTopRight">
                    <HiDotsVertical />
                </div>
            </div>
            <div className="postcenter"> 
                    <span className="postTex">{post.desc}</span>
                    <img className='postCenterImg' src={post.photo} alt="asas" />
            </div>
            <div className="postButtom">

                <div className="postButtomleft">
                    <img className='likeIcon' src="assets/like.png" alt="" />
                    <img className='likeIcon'   src="assets/heart.png" alt=""  onClick={incremntCount}/>
                    <span className="PostLikeCounter"> {count} </span>
                </div>
                <div className="postButtomright"> 
                    <span className="postcommentText"> {post.comment}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post