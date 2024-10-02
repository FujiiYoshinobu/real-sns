import { css } from "@emotion/react";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";

export default function Share() {
    return (
        <div css={styles.share}>
            <div css={styles.shareWrapperStyle}>
                <div css={styles.shareTopStyle}>
                    <img
                        src="/assets/person/1.jpeg"
                        alt=""
                        css={styles.shareProfileImgStyle}
                    />
                    <input
                        type="text"
                        css={styles.shareInputStyle}
                        placeholder="今何してるの？"
                    />
                </div>
                <hr css={styles.shareHrStyle} />
                <div css={styles.shareButtonsStyle}>
                    <div css={styles.shareOptionsStyle}>
                        <div css={styles.shareOptionStyle}>
                            <Image
                                css={styles.shareIconStyle}
                                htmlColor="blue"
                            />
                            <span css={styles.shareOptionTextStyle}>写真</span>
                        </div>
                        <div css={styles.shareOptionStyle}>
                            <Gif
                                css={styles.shareIconStyle}
                                htmlColor="hotpink"
                            />
                            <span css={styles.shareOptionTextStyle}>GIF</span>
                        </div>
                        <div css={styles.shareOptionStyle}>
                            <Face
                                css={styles.shareIconStyle}
                                htmlColor="green"
                            />
                            <span css={styles.shareOptionTextStyle}>
                                気持ち
                            </span>
                        </div>
                        <div css={styles.shareOptionStyle}>
                            <Analytics
                                css={styles.shareIconStyle}
                                htmlColor="red"
                            />
                            <span css={styles.shareOptionTextStyle}>投票</span>
                        </div>
                    </div>
                    <div>
                        <button css={styles.shareButtonStyle}>投稿</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    share: css({
        width: "100%",
        height: "170px",
        boxShadow: " 3px 7px 13px -10px #7385c9",
        borderRadius: "10px",
    }),
    shareWrapperStyle: css({
        padding: "10px",
    }),
    shareTopStyle: css({
        display: "flex",
        alignItems: "center",
    }),
    shareProfileImgStyle: css({
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "10px",
    }),
    shareInputStyle: css({
        border: "none",
        width: "100%",
        ":focus": {
            outline: "none",
        },
    }),
    shareHrStyle: css({
        margin: "20px",
    }),
    shareButtonsStyle: css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }),
    shareOptionsStyle: css({
        display: "flex",
        margine: "20px",
    }),
    shareOptionStyle: css({
        display: "flex",
        alignItems: "center",
        marginRight: "15px",
        cursor: "pointer",
    }),
    shareIconStyle: css({
        margin: "3px",
    }),
    shareOptionTextStyle: css({
        fontSize: "14px",
        fontWeight: 550,
    }),
    shareButtonStyle: css({
        border: "none",
        padding: "6px 17px",
        backgroundColor: "#2c517c",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
        marginRight: "20px",
    }),
};
