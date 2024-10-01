/** @jsxImportSource @emotion/react */
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

export default function Sidebar() {
    return (
        <div css={styles.sidebarStyle}>
            <div css={styles.sidebarWrapperStyle}>
                <ul css={styles.sidebarListStyle}>
                    <li css={styles.sidebarListItemStyle}>
                        <Home css={styles.sidebarIconStyle} />
                        <span css={styles.sidebarListItemTextStyle}>
                            ホーム
                        </span>
                    </li>
                    <li css={styles.sidebarListItemStyle}>
                        <Search css={styles.sidebarIconStyle} />
                        <span css={styles.sidebarListItemTextStyle}>検索</span>
                    </li>
                    <li css={styles.sidebarListItemStyle}>
                        <Notifications css={styles.sidebarIconStyle} />
                        <span css={styles.sidebarListItemTextStyle}>通知</span>
                    </li>
                    <li css={styles.sidebarListItemStyle}>
                        <MessageRounded css={styles.sidebarIconStyle} />
                        <span css={styles.sidebarListItemTextStyle}>
                            メッセージ
                        </span>
                    </li>
                    <li css={styles.sidebarListItemStyle}>
                        <Bookmark css={styles.sidebarIconStyle} />
                        <span css={styles.sidebarListItemTextStyle}>
                            ブックマーク
                        </span>
                    </li>
                    <li css={styles.sidebarListItemStyle}>
                        <Person css={styles.sidebarIconStyle} />
                        <span css={styles.sidebarListItemTextStyle}>
                            プロフィール
                        </span>
                    </li>
                    <li css={styles.sidebarListItemStyle}>
                        <Settings css={styles.sidebarIconStyle} />
                        <span css={styles.sidebarListItemTextStyle}>設定</span>
                    </li>
                </ul>
                <hr css={styles.sidebarHrStyle} />
                <ul css={styles.sidebarFriendListStyle}>
                    <li css={styles.sidebarFriendStyle}>
                        <img
                            src="/assets/person/2.jpeg"
                            alt=""
                            css={styles.sidebarFriendImgStyle}
                        />
                        <span css={styles.sidebarFriendNameStyle}>
                            ShinCode
                        </span>
                    </li>
                    <li css={styles.sidebarFriendStyle}>
                        <img
                            src="/assets/person/3.jpeg"
                            alt=""
                            css={styles.sidebarFriendImgStyle}
                        />
                        <span css={styles.sidebarFriendNameStyle}>Tanaka</span>
                    </li>
                    <li css={styles.sidebarFriendStyle}>
                        <img
                            src="/assets/person/4.jpeg"
                            alt=""
                            css={styles.sidebarFriendImgStyle}
                        />
                        <span css={styles.sidebarFriendNameStyle}>Satou</span>
                    </li>
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
    }),
    sidebarListStyle: css({
        padding: 0,
        margin: 0,
        listStyle: "none",
    }),
    sidebarListItemStyle: css({
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        padding: "4px 6px",
        cursor: "pointer",
        boxShadow: " 3px 7px 18px -7px #7385c9",
        borderRadius: "10px",
        transition: "all 0.3s",
        ":hover": { boxShadow: "none", transform: "translateY(5px)" },
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
    sidebarFriendStyle: css({
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
    }),
    sidebarFriendImgStyle: css({
        width: "32px",
        height: "32px",
        objectFit: "cover",
        borderRadius: "50%",
        marginLeft: "10px",
    }),
    sidebarFriendNameStyle: css({
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
    }),
};
