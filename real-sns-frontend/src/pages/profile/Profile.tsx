import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Rightbar from "../../components/rightbar/Rightbar";
import { Box, css } from "@mui/system";
import { Typography } from "@mui/material";

export default function Profile() {
    return (
        <>
            <Topbar />
            <Box sx={{ display: "flex" }}>
                <Sidebar />
                <Box sx={{ flex: 10.5 }}>
                    <Box>
                        <Box sx={{ height: "320px", position: "relative" }}>
                            <Box
                                component="img"
                                src="assets/post/3.jpeg"
                                alt=""
                                sx={styles.coverImageStyle}
                            />
                            <Box
                                component="img"
                                src="assets/person/1.jpeg"
                                alt=""
                                sx={styles.userIconImageStyle}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* ! */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: "24px",
                                    margin: "8px",
                                }}
                            >
                                Shin Code
                            </Typography>
                            {/* ! */}
                            <Typography component="span">
                                Udemy講師をしています
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <TimeLine />
                            <Rightbar profile />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const styles = {
    coverImageStyle: css({
        width: "100%",
        height: "250px",
        objectFit: "cover",
    }),
    userIconImageStyle: css({
        position: "absolute",
        left: 0,
        right: 0,
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        margin: "auto",
        top: "150px ",
    }),
};
