import React from "react";
import { Chat, Notifications, Search } from "@mui/icons-material";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Real SNS</span>
            </div>
            <div className="searchbar">
                <Search className="searchIcon" />
                <input
                    type="text"
                    className="searchInput"
                    placeholder="探し物はなんですか？"
                />
            </div>
            <div className="tobbarRight">
                <div className="topbarIconItem">
                    <Chat />
                    <span className="tobbarIconBadge">1</span>
                </div>
                <Notifications />
                <span className="tobbarIconBadge">2</span>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    );
}
