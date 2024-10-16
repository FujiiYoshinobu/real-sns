import { css } from "@emotion/react";
import {
    Bookmark,
    Home,
    MessageRounded,
    Notifications,
    Person,
    Search,
    Settings,
} from "@mui/icons-material";
import SidebarItem from "./SidebarItem";
import CloseFriend from "./CloseFriend";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div css={styles.sidebarStyle}>
            <div css={styles.sidebarWrapperStyle}>
                <ul className="sidebarList">
                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                        <SidebarItem
                            icon={<Home css={styles.sidebarIconStyle} />}
                            label={"ホーム"}
                        />
                    </Link>
                    <SidebarItem
                        icon={<Search css={styles.sidebarIconStyle} />}
                        label={"検索"}
                    />
                    <SidebarItem
                        icon={<Notifications css={styles.sidebarIconStyle} />}
                        label={"通知"}
                    />
                    <SidebarItem
                        icon={<MessageRounded css={styles.sidebarIconStyle} />}
                        label={"メッセージ"}
                    />
                    <SidebarItem
                        icon={<Bookmark css={styles.sidebarIconStyle} />}
                        label={"ブックマーク"}
                    />
                    <Link to='/profile/sincode' style={{ textDecoration: 'none', color: 'black' }}>
                        <SidebarItem
                            icon={<Person css={styles.sidebarIconStyle} />}
                            label={"プロフィール"}
                        />
                    </Link>
                    <SidebarItem
                        icon={<Settings css={styles.sidebarIconStyle} />}
                        label={"設定"}
                    />
                </ul>
                <hr css={styles.sidebarHrStyle} />
                <ul css={styles.sidebarFriendListStyle}>
                    {Users.map((user) => (
                        <CloseFriend user={user} key={user.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

const styles = {
    sidebarStyle: css({
        flex: "2.5",
        height: "100vh",
    }),
    sidebarWrapperStyle: css({
        padding: "20px",
        "ul.sidebarList": {
            padding: 0,
            margin: 0,
            listStyle: "none",
            li: {
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                boxShadow: " 3px 7px 18px -7px #7385c9",
                borderRadius: "10px",
                transition: "all 0.3s",
                ":hover": { boxShadow: "none", transform: "translateY(5px)" },
            },
        },
    }),

    sidebarIconStyle: css({
        fontSize: "35px",
        marginRight: "10px",
    }),
    sidebarListItemTextStyle: css({
        fontSize: "20px",
        paddingTop: "3px",
    }),
    sidebarHrStyle: css({
        margin: "20px 0",
    }),
    sidebarFriendListStyle: css({
        padding: 0,
        margin: 0,
        listStyle: "none",
    }),
};
