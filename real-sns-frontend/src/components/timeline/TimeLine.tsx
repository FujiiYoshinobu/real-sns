// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function TimeLine() {
    return (
        <div css={styles.timelineStyle}>
            <div css={styles.timelineWrapper}>
                <Share />
            </div>
            {Posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
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
