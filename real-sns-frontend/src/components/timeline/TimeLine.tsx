// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Posts } from "../../dummyData";

export default function TimeLine() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            // const response = await axios.get('/posts/timeline/66fa0a2091764d85c36eef42')
            //const response = await axios.get('posts/66fa12e8d4f985e07ad6f254')
            const response = await axios.get('http://localhost:5173/api/posts/timeline/66fa0a2091764d85c36eef42')
            setPosts(response.data)
            console.log(response.data)
        }
        fetchPosts()
    }, [])
    return (
        <div css={styles.timelineStyle}>
            <div css={styles.timelineWrapper}>
                <Share />
            </div>
            {posts.map((post) => (
                < Post post={post} key={post.id} />
            ))}
        </div>
    );
}

const styles = {
    timelineStyle: css({
        flex: 6,
    }),
    timelineWrapper: css({
        padding: "20px",
    }),
};
