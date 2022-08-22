import React from 'react'
import "./Rightbar.css"
import Online from "../Online/Online"
import {Users} from "../../Dummydata"
import Home from '../../Pages/Home/Home'

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='bithdaytext'>  <b> Fazeel Ahmed </b>  have a Birthday today and others Friends toooo </span>

          </div>

        <img className="rightImg" src="data:image/png;base64,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" alt="" />
        <h4 className='rightbarTitle'> Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            < Online key={u.id}  user={u} />
          ) )}
          
          
        </ul>
        </>
    )
  }

  
    const Rightprofilebar = () =>{
      return (
        <>
            <h4 className="rightbartitle">  User Information </h4>

            <div className="RightbarInfo">
              <div className="rightbarInfoItems">
                <span className="rightbarinfoKey"> City: </span>
                <span className="rightbarinfovalue"> Islamabad </span>
              </div>
              <div className="rightbarInfoItems">
                <span className="rightbarinfoKey"> From: </span>
                <span className="rightbarinfovalue"> G6/1-2 Islamabad </span>
              </div>
              <div className="rightbarInfoItems">
                <span className="rightbarinfoKey"> Relationship Status: </span>
                <span className="rightbarinfovalue"> Single </span>
              </div>

            </div>
            <h4 className="rightbartitle">  User Friends </h4>
            <div className="rightBarFollowings">
              <div className="rightbarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarfollowingbarImg" />
                <span className="rightbarfollowingBarname"> Usama Malik  </span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarfollowingbarImg" />
                <span className="rightbarfollowingBarname"> Usama Malik  </span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/2.jpeg" alt="" className="rightBarfollowingbarImg" />
                <span className="rightbarfollowingBarname"> Usama Malik  </span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/3.jpeg" alt="" className="rightBarfollowingbarImg" />
                <span className="rightbarfollowingBarname"> Usama Malik  </span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/5.jpeg" alt="" className="rightBarfollowingbarImg" />
                <span className="rightbarfollowingBarname"> Usama Malik  </span>
              </div>
              <div className="rightbarFollowing">
                <img src="assets/person/5.jpeg" alt="" className="rightBarfollowingbarImg" />
                <span className="rightbarfollowingBarname"> Usama Malik  </span>
              </div>
            </div>
         </>
      )
    }
  
  return (
    <div className='Rightbar'>
      <div className="rightWrapper">
        
        {profile ? <Rightprofilebar /> : <HomeRightbar/> }
      </div>

    </div>
  )
}

export default Rightbar