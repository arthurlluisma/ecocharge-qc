import { posts } from "co-mission/data/postsdata";

export function getTags() {
    const tags = posts.map((post) => {
        return post.tags;
    });
    return tags.flat();
}
