import { css } from "@emotion/react";
import { User } from "../../types/types";

type Props = {
    user: User;
};

export default function Online(props: Props) {
    const PUBLIC_FOLDER = 'http://localhost:5173/public/assets'
    const { user } = props;
    return (
        <li className="rightbarFriend" css={styles.rightbarFriendStyle}>
            <div
                className="profileImgContainer"
                css={styles.ProfileImgContainerStyle}
            >
                <img src={PUBLIC_FOLDER + user.profilePicture} alt="" />
                <span
                    className="rightbarOnline"
                    css={styles.rightbarOnlineStyle}
                ></span>
            </div>
            <span
                className="rightbarUseranme"
                css={styles.rightbarUsernameStyle}
            >
                {user.username}
            </span>
        </li>
    );
}

const styles = {
    rightbarFriendStyle: css({
        display: "flex",
        alignItem: "center",
        margin: "15px",
    }),
    ProfileImgContainerStyle: css({
        marginRight: "10px",
        position: "relative",
        img: {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
        },
    }),
    rightbarOnlineStyle: css({
        backgroundColor: "purple",
        position: "absolute",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        top: "-2px",
        left: 0,
        border: "2px solid white",
    }),
    rightbarUsernameStyle: css({
        marginTop: "8px",
        fontWeight: 550,
    }),
};
