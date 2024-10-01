/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Rightbar() {
    return <div css={styles.rightbarStyle}>Rightbar</div>;
}

const styles = {
    rightbarStyle: css({
        flex: 3.5,
    }),
};
