import { css } from "@emotion/react";

type Props = {
    icon: JSX.Element;
    label: string;
};

export default function SidebarItem(props: Props) {
    const { icon, label } = props;
    return (
        <li css={styles.sidebarListItemStyle}>
            {icon}
            <span css={styles.sidebarListItemTextStyle}>{label}</span>
        </li>
    );
}

const styles = {
    sidebarListItemStyle: {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        padding: "4px 6px",
        cursor: "pointer",
        boxShadow: " 3px 7px 13px -10px #7385c9",
        borderRadius: "10px",
        transition: "all 0.3s",
        ":hover": { boxShadow: "none", transform: "translateY(5px)" },
    },
    sidebarListItemTextStyle: css({
        fontSize: "20px",
        paddingTop: "3px",
    }),
};
