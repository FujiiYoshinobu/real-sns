import { css } from "@emotion/react";
import Online from "./Online";
import { Users } from "../../dummyData";
import { Box } from "@mui/material";
import Following from "./Following";

type Props = {
    profile?: boolean;
};

export default function Rightbar(props: Props) {
    const PUBLIC_FOLDER = 'http://localhost:5173/public/assets'
    const { profile } = props;
    const HomeRightbar = () => {
        return (
            <>
                <div
                    className="eventContainer"
                    css={styles.eventContainerStyle}
                >
                    <img src="assets/star.png" alt="" className="starImg" />
                    <span className="eventText">
                        <b>フォロワー限定</b>イベント開催中！
                    </span>
                </div>
                <img
                    src="assets/event.jpeg"
                    alt=""
                    className="eventImg"
                    css={styles.eventImgStyle}
                />
                <h4 className="rightbarTitle">オンラインの友達</h4>
                <ul
                    className="rightbarFriendList"
                    css={styles.rightbarFriendListStyle}
                >
                    {Users.map((user) => (
                        <Online user={user} key={user.id} />
                    ))}
                </ul>
                <p className="promotionTitle" css={styles.promotionTitleStyle}>
                    プロモーション広告
                </p>
                <img
                    src="assets/promotion/promotion1.jpeg"
                    alt=""
                    className="rightbarPromotionImg"
                    css={styles.rightbarPromotionImgStyle}
                />
                <p className="promotionName" css={styles.promotionNameStyle}>
                    ショッピング
                </p>

                <img
                    src="assets/promotion/promotion2.jpeg"
                    alt=""
                    className="rightbarPromotionImg"
                    css={styles.rightbarPromotionImgStyle}
                />
                <p className="promotionTitle" css={styles.promotionNameStyle}>
                    カーショップ
                </p>
                <img
                    src="assets/promotion/promotion3.jpeg"
                    alt=""
                    className="rightbarPromotionImg"
                    css={styles.rightbarPromotionImgStyle}
                />
                <p className="promotionName" css={styles.promotionNameStyle}>
                    ShinCode株式会社
                </p>
            </>
        );
    };
    const ProfileRightbar = () => {
        return (
            <>
                <Box
                    component={"h4"}
                    sx={{
                        fontSize: "18px",
                        fontWeight: "550",
                        marginBottom: "10px",
                    }}
                >
                    ユーザー情報
                </Box>
                <Box sx={{ marginBottom: "30px" }}>
                    <Box
                        sx={{
                            marginBottom: "10px",
                        }}
                    >
                        <Box
                            component={"span"}
                            sx={{
                                fontWeight: 500,
                                marginRight: "5px",
                                color: "#555",
                            }}
                        >
                            出身：
                        </Box>
                        <Box component={"span"}>福岡</Box>
                    </Box>
                    <Box component={"h4"}>あなたの友達</Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >
                        <Following
                            src={PUBLIC_FOLDER + "/person/1.jpeg"}
                            username="Shin Code"
                        />
                        <Following
                            src={PUBLIC_FOLDER + "/person/2.jpeg"}
                            username="Yamaki"
                        />
                        <Following
                            src={PUBLIC_FOLDER + "/person/3.jpeg"}
                            username="Koga"
                        />
                        <Following
                            src={PUBLIC_FOLDER + "/person/4.jpeg"}
                            username="Matukubo"
                        />
                        <Following
                            src={PUBLIC_FOLDER + "/person/5.jpeg"}
                            username="Kikukawa"
                        />
                    </Box>
                </Box>
            </>
        );
    };

    return (
        <Box sx={styles.rightbarStyle}>
            <Box sx={styles.rightbarWrapperStyle}>
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </Box>
        </Box>
    );
}

const styles = {
    rightbarStyle: css({
        flex: 3.5,
    }),
    rightbarWrapperStyle: css({
        padding: "20px 20px 0 0",
    }),
    eventContainerStyle: css({
        display: "flex",
        alignItems: "center",
        "img.starImg": {
            width: "40px",
            height: "40px",
            marginRight: "5px",
        },
        "span.eventText": {
            fontWeight: 300,
            fontSize: "15px",
        },
    }),
    eventImgStyle: css({
        width: "100%",
        borderRadius: "10px",
        margin: "25px 0",
    }),
    rightbarFriendListStyle: css({
        padding: 0,
        margin: 0,
        listStyle: "none",
    }),
    promotionTitleStyle: css({
        fontSize: "18px",
        fontWeight: 550,
        marginBottom: "-10px",
    }),
    rightbarPromotionImgStyle: css({
        width: "85%",
        borderRadius: "10px",
        margin: "25px 0",
    }),
    promotionNameStyle: css({
        fontSize: "small",
        color: "#434343",
        marginTop: "-20px",
    }),
};
