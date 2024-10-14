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
                    <Box css={styles.loginBoxStyle}>
                        <Typography component={"span"} sx={{
                            textAlign: 'center',
                            fontWeight: '550',
                            fontSize: '16px',
                            marginBottom: '16px'
                        }}>
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
                        <Button sx={{
                            height: '50px',
                            borderRadius: '10px',
                            border: 'none',
                            backgroundColor: '#41428b',
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: '500',
                            cursor: 'pinter'
                        }}>ログイン</Button>
                        <Typography component={"span"} sx={{
                            textAlign: 'center',
                            color: '#41428b ',
                            margin: '15px 0'
                        }}>
                            パスワードを忘れた方へ
                        </Typography>
                        <Button sx={{
                            width: '70%',
                            alignSelf: 'center',
                            height: '50px',
                            borderRadius: '10px',
                            border: 'none',
                            backgroundColor: '#3c8d50',
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: '500',
                            cursor: 'pinter',

                        }}>アカウント作成</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    loginBoxStyle: css({
        height: "300px",
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: " 3px 7px 13px -10px #7385c9"
    }),
    loginInputStyle: css({
        height: "50px",
        borderRadius: "10px",
        border: "1px solid gray",
        fontSize: "18px",
        paddingLeft: "20px",
        marginBottom: '8px',
        ":focus": {
            outline: "none",
        },
    }),
};
