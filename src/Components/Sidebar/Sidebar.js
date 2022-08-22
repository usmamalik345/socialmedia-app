import React from 'react'
import "./Sidebar.css"
import { MdRssFeed, MdShoppingBag } from "react-icons/md"
import { BsFillChatDotsFill, BsBookmarksFill, BsFillQuestionSquareFill, BsCalendarEventFill } from "react-icons/bs"
import { RiVideoAddFill } from "react-icons/ri"
import { BiGroup } from "react-icons/bi"
import { FcGraduationCap } from "react-icons/fc"
import Closefriends from '../CloseFriends/Closefriends'

import {Users} from "../../Dummydata"



const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <MdRssFeed className="sidebarIcons" />
            <span className="sidebarListItemtext"> Feed</span>
          </li>

          <li className="sidebarListItems">
            <BsFillChatDotsFill className="sidebarIcons" />
            <span className="sidebarListItemtext"> chat </span>
          </li>

          <li className="sidebarListItems">
            <RiVideoAddFill className="sidebarIcons" />
            <span className="sidebarListItemtext"> Video </span>
          </li>

          <li className="sidebarListItems">
            <BiGroup className="sidebarIcons" />
            <span className="sidebarListItemtext"> Groups </span>
          </li>

          <li className="sidebarListItems">
            <BsBookmarksFill className="sidebarIcons" />
            <span className="sidebarListItemtext"> BookMark </span>
          </li>

          <li className="sidebarListItems">
            <BsFillQuestionSquareFill className="sidebarIcons" />
            <span className="sidebarListItemtext"> Questions </span>
          </li>

          <li className="sidebarListItems">
            <MdShoppingBag className="sidebarIcons" />
            <span className="sidebarListItemtext"> Jobs </span>
          </li>

          <li className="sidebarListItems">
            <BsCalendarEventFill className="sidebarIcons" />
            <span className="sidebarListItemtext"> Events </span>
          </li>

          <li className="sidebarListItems">
            <FcGraduationCap className="sidebarIcons" />
            <span className="sidebarListItemtext">Crouse </span>
          </li>
        </ul>
        <button className="sidebarButton"> show more</button>
        <hr className="sidebarHr" />

          <ul className="sidebarfriendList">
            
           {Users.map((u) => (
            <Closefriends  key={u.id} user={u} />
           ))}

            
          </ul>
      </div>
    </div>
  )
}

export default Sidebar