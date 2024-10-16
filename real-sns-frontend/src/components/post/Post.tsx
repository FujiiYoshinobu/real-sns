import { css } from "@emotion/react";
import { MoreVert } from "@mui/icons-material";
import { PostType } from "../../types/types";
// import { Users } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
    post: PostType;
};

export default function Post(props: Props) {
    const PUBLIC_FOLDER = 'http://localhost:5173/public/assets'
    const { post } = props;
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`http://localhost:5000/api/${post.userId}`)
            setUser(response.data)
        }
        fetchUser()
    }, [])

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div css={styles.postStyle}>
            <div css={styles.postWrapperStyle}>
                <div css={styles.postTopStyle}>
                    <div css={styles.postTopLeftStyle}>
                        <img
                            src={user.profilePicture}
                            css={styles.postProfileImgStyle}
                        />
                        <span css={styles.postUsernameStyle}>
                            {user.username}
                        </span>
                        <span css={styles.postDateStyle}>{post.date}</span>
                    </div>
                    <div css={styles.postTopRightStyle}>
                        <MoreVert />
                    </div>
                </div>
                <div css={styles.postCenterStyle}></div>
                <span css={styles.postText}>{post.desc}</span>
                <img src={PUBLIC_FOLDER + post.photo} alt="" css={styles.postImgStyle} />
                <div css={styles.postBottomStyle}>
                    <div css={styles.postBottomLeftStyle}>
                        <img
                            src={PUBLIC_FOLDER + "/heart.png"}
                            alt=""
                            css={styles.likeIconStyle}
                            onClick={() => handleLike()}
                        />
                        <span css={styles.postLikeCounterStyle}>
                            {`${like}人がいいねを押しました`}
                        </span>
                    </div>
                    <div css={styles.postBottonRightStyle}>
                        <span css={styles.postCommentTextStyle}>
                            {`${post.comment}:コメント`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    postStyle: css({
        width: "100%",
        boxShadow: " 3px 7px 13px -10px #7385c9",
        borderRadius: "10px",
        margin: "30px 0",
    }),
    postWrapperStyle: css({
        padding: "10px",
    }),
    postTopStyle: css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }),
    postTopLeftStyle: css({
        display: "flex",
        alignItems: "center",
    }),
    postProfileImgStyle: css({
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        objectFit: "cover",
    }),
    postUsernameStyle: css({
        fontSize: "15px",
        fontWeight: 550,
        margin: "0 10px",
    }),
    postDateStyle: css({
        fontSize: "12px",
    }),
    postTopRightStyle: css({}),
    postCenterStyle: css({
        margin: "20px 0",
    }),
    postText: css({}),
    postImgStyle: css({
        marginTop: "20px",
        width: "100%",
        maxHeight: "500px",
        objectFit: "contain",
    }),
    postBottomStyle: css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }),
    postBottomLeftStyle: css({
        display: "flex",
        alignItems: "center",
    }),
    likeIconStyle: css({
        width: "24px",
        height: "24px",
        marginRight: "5px",
        cursor: "pointer",
    }),
    postLikeCounterStyle: css({
        fontSize: "15px",
    }),
    postBottonRightStyle: css({}),
    postCommentTextStyle: css({
        cursor: "pointer",
        borderBottom: "1px solid gray",
        fontSize: "15px",
        marginRight: "3px",
    }),
};
