import { css } from "@emotion/react";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
    return (
        <div css={styles.postStyle}>
            <div css={styles.postWrapperStyle}>
                <div css={styles.postTopStyle}>
                    <img
                        src="./assets/person/1.jpeg"
                        css={styles.postProfileImgStyle}
                    />
                    <span css={styles.postUsernameStyle}></span>
                    <span css={styles.postDateStyle}></span>
                </div>
                <div css={styles.postRightStyle}>
                    <MoreVert />
                </div>
                <div css={styles.postCenterStyle}>
                    <span css={styles.postText}>SNSを自作中です</span>
                    <img
                        src="./assets/post/1.jpeg"
                        alt=""
                        css={styles.postImgStyle}
                    />
                </div>
                <div css={styles.postBottomLeftStyle}>
                    <img
                        src="./assets/heart.png"
                        alt=""
                        css={styles.likeIconStyle}
                    />
                    <span css={styles.postLikeCounterStyle}>
                        5人がいいねを押しました
                    </span>
                </div>
                <div css={styles.postBottonRightStyle}>
                    <span css={styles.postCommentTextStyle}>4:コメント</span>
                </div>
            </div>
        </div>
    );
}

const styles = {
    postStyle: css({}),
    postWrapperStyle: css({}),
    postTopStyle: css({}),
    postProfileImgStyle: css({}),
    postUsernameStyle: css({}),
    postDateStyle: css({}),
    postRightStyle: css({}),
    postCenterStyle: css({}),
    postText: css({}),
    postImgStyle: css({}),
    postBottomStyle: css({}),
    postBottomLeftStyle: css({}),
    likeIconStyle: css({}),
    postLikeCounterStyle: css({}),
    postBottonRightStyle: css({}),
    postCommentTextStyle: css({}),
};
