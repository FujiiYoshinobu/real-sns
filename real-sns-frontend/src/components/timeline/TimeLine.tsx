// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Share from "../share/Share";
import Post from "../post/Post";

export default function TimeLine() {
    return (
        <div css={styles.timelineStyle}>
            <div css={styles.timelineWrapper}>
                <Share />
            </div>
            <Post />
        </div>
    );
}

const styles = {
    timelineStyle: css({
        flex: 6,
    }),
    timelineWrapper: css({
        padding: "20px",
    }),
};
