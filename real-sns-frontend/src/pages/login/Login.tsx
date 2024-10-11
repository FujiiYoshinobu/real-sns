import { Box, Button, css, Typography } from "@mui/material";

export default function Login() {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#f0f2f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "70%",
                    height: "70%",
                    display: "flex",
                }}
            >
                {/* left */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant={"h3"}
                        sx={{
                            fontSize: "50px",
                            fontWeight: 800,
                            color: "#41428b",
                            marginBottom: "10px",
                        }}
                    >
                        Real SNS
                    </Typography>
                    <Typography component={"span"} sx={{ fontSize: "24px" }}>
                        本格的なSNSを、自分の手で。
                    </Typography>
                </Box>
                {/* right */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <form css={styles.loginBoxStyle}>
                        <Typography component={"span"}>
                            ログインはこちら
                        </Typography>
                        <input
                            css={styles.loginInputStyle}
                            type="text"
                            placeholder="Eメール"
                        ></input>
                        <input
                            css={styles.loginInputStyle}
                            type="text"
                            placeholder="パスワード"
                        ></input>
                        <Button>ログイン</Button>
                        <Typography component={"span"}>
                            パスワードを忘れた方へ
                        </Typography>
                        <Button>アカウント作成</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    loginBoxStyle: css({
        height: "300px",
        paddig: "20px",
        background: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }),
    loginInputStyle: css({
        height: "50px",
        borderRadius: "10px",
        border: "1px solid gray",
        fontSize: "18px",
        paddingLeft: "20px",
        // ":focus": {
        //     outline: "none",
        // },
    }),
};
