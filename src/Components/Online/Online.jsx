import React from 'react'
import "./Online.css"

const Online = ({user}) => {
    
  return (
    <div>

<li className="rightbarFriend">
            <div className="rightbarprofilecontainer">
              <img className="rightbarImg" src={user.profilePicture} alt="" />
              <span className="rightbarOnline"> </span>
            </div>
          <span className="rightbarUserName"> {user.username}  </span>


          </li>
    </div>
  )
}

export default Online