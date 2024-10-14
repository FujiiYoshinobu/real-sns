/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Chat, Notifications, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div css={styles.topbarContainerStyle}>
            <div css={styles.topbarLeftStyle}>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                    <span css={styles.logoStyle}>Real SNS</span>
                </Link>
            </div>
            <div css={styles.topbarCenterStyle}>
                <div css={styles.searchbarStyle}>
                    <Search
                        className="searchIcon"
                        css={styles.searchIconStyle}
                    />
                    <input
                        type="text"
                        placeholder="探し物はなんですか？"
                        css={styles.searchInputStyle}
                    />
                </div>
            </div>
            <div css={styles.topbarRightStyle}>
                <div css={styles.topbarItemIconsStyle}>
                    <div css={styles.topbarItemIconStyle}>
                        <Chat />
                        <span css={styles.topbarIconBadgeStyle}>1</span>
                    </div>
                    <div css={styles.topbarItemIconStyle}>
                        <Notifications />
                        <span css={styles.topbarIconBadgeStyle}>2</span>
                    </div>
                    <img
                        src="/assets/person/1.jpeg"
                        alt=""
                        css={styles.topbarImgStyle}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    topbarContainerStyle: css({
        backgroundColor: "#2c517c",
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
    }),
    topbarLeftStyle: css({
        flex: 3,
    }),
    topbarCenterStyle: css({
        flex: 5,
    }),
    topbarRightStyle: css({
        flex: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
    }),
    logoStyle: css({
        fontSize: "24px",
        color: "white",
        fontWeight: "bold",
        marginLeft: "20px",
    }),
    searchbarStyle: css({
        width: "100%",
        height: "30px",
        backgroundColor: "white",
        borderRadius: "25px",
        display: "flex",
        alignItems: "center",
    }),
    searchIconStyle: css({
        fontSize: "20px ! important",
        marginLeft: "10px",
        marginRight: "5px",
    }),
    searchInputStyle: css({
        border: "none",
        width: "80%",
        "&:focus": css({ outline: "none" }),
    }),
    topbarItemIconsStyle: css({
        display: "flex",
    }),
    topbarItemIconStyle: css({
        marginRight: "15px",
        cursor: "pointer",
        position: "relative",
        marginTop: "5px",
    }),
    topbarImgStyle: css({
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        cursor: "pointer",
        objectFit: "cover",
    }),
    topbarIconBadgeStyle: css({
        position: "absolute",
        top: "-5px",
        right: "-5px",
        background: "#db6ab9",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
    }),
};
