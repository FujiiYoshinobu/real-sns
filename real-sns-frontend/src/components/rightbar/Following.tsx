import { Box } from "@mui/material";

type Props = {
    src: string;
    username: string;
};

export default function Following(props: Props) {
    const { src, username } = props;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
                cursor: "pointer",
            }}
        >
            <Box
                component={"img"}
                src={src}
                sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "5px",
                    objectFit: "cover",
                }}
            />
            <Box component={"span"}>{username}</Box>
        </Box>
    );
}
