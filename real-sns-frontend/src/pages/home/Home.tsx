/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Home() {
    return (
        <>
            <Topbar />
            <div css={styles.homeContainerStyle}>
                <Sidebar />
                <TimeLine />
                <Rightbar />
            </div>
        </>
    );
}

const styles = {
    homeContainerStyle: css({
        display: "flex",
        width: "100%",
        backgroundColor: "#f8fcff",
    }),
};
