/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function TimeLine() {
    return (
        <div css={styles.timelineStyle}>
            <div css={styles.timelineWrapper}>{/* <Share /> */}</div>
        </div>
    );
}

const styles = {
    timelineStyle: css({
        flex: 6,
    }),
    timelineWrapper: css({}),
};
