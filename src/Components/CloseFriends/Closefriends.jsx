import React from 'react'

const Closefriends = ({user}) => {
    console.log(user);
  return (
    <div>
        <li className="friendbarList">
              <img src={user.profilePicture } alt="" className="sidebarIm" />
              <span className="sidebarFriendname"> {user.username } </span>
            </li>
    </div>
  )
}

export default Closefriends