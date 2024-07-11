import Link from "next/link";
import Card from "co-mission/components/Card";
import styles from "co-mission/styles/Feed.module.css";
import { getTags } from "co-mission/helpers/postHelper";
import { posts } from "co-mission/data/postsdata";

export default function Feed({ search, isShowEverything }) {
    return (
        <div className={styles.main}>
            <div className={styles.feed}>
                {posts.map((post, idx) => {
                    if (isShowEverything) {
                        return <Card key={idx} post={posts[idx]} />;
                    } else {
                        let canShow = false;
                        post.tags.map((tag) => {
                            canShow = search === tag;
                        });
                        return canShow && <Card key={idx} post={posts[idx]} />;
                    }
                })}
            </div>
        </div>
    );
}
