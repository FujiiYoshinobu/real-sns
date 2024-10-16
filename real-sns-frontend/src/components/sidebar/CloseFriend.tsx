import { css } from "@emotion/react";
import { User } from "../../types/types";

type Props = {
    user: User;
};

export default function CloseFriend(props: Props) {
    const PUBLIC_FOLDER = 'http://localhost:5173/public/assets'
    const { user } = props;
    return (
        <li css={styles.sidebarFriendStyle}>
            <img
                src={PUBLIC_FOLDER + user.profilePicture}
                alt=""
                css={styles.sidebarFriendImgStyle}
            />
            <span css={styles.sidebarFriendNameStyle}>{user.username}</span>
        </li>
    );
}

const styles = {
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
    }),
    sidebarFriendNameStyle: css({
        marginLeft: "10px",
    }),
};
