
import React from 'react'
import "./Profile.css"
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Rightbar from "../../Components/Rightbar/Rightbar"
import Feed from '../../Components/Feed/Feed'

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">

          <div className="profilerightTop">
            <div className="profileCover">

              <img className="ProfilecoveraImg" src="assets/post/3.jpeg" alt="" />
              <img className="ProfilecoverImg" src="assets/person/7.jpeg" alt="" />
            </div>
              <div className="profileInfo">
                <h4 className="profileInfoname"> Usama Shahid </h4>
                <span className="profileInfdesp"> Hi, Its me Usama Malik </span> 
              </div>
          </div>
          <div className="profilerightButtom">

            <Feed />
            <Rightbar />

          </div>


        </div>



      </div>
    </>
  )
}

export default Profile