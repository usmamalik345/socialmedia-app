import React from 'react'
import "./Topbar.css"
import { BsSearch, BsPersonFill, BsFillChatDotsFill } from "react-icons/bs"
import { MdNotifications } from "react-icons/md"


const Topbar = () => {
    return (
        <>
            <div className="topbarContainer">
                <div className="topbarLeft"> <span className="Logo">  Usama Social </span></div>
                <div className="topbarCenter">
                    <div className="topsearchBar">
                        <BsSearch className="searchIconss" />
                        <input placeholder='search..........' className="search" />
                    </div>

                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink"> Home Page</span>
                        <span className="topbarLink"> Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <BsPersonFill />
                            <span className="topbariconscounter"> 1 </span>
                        </div>

                        <div className="topbarIconItem">
                            <BsFillChatDotsFill />
                            <span className="topbariconscounter"> 1 </span>
                        </div>

                        <div className="topbarIconItem">
                            <MdNotifications />
                            <span className="topbariconscounter"> 1 </span>
                        </div>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="topbarImg" />
                </div>
            </div>
        </>
    )
}

export default Topbar