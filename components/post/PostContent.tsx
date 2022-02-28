import { Post } from "typings";
import { getFormattedDate, getReadingTime } from "utils/post";

import PostAuthorSummary from "./PostAuthorSummary";

interface PostContentProps {
    post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
    return (
        <main className="px-24">
            <div className="w-[65vw] px-[10vw] pt-16">
                <PostAuthorSummary
                    image={post.author.image}
                    name={post.author.name}
                    formattedDate={getFormattedDate(post._createdAt)}
                    readingTime={getReadingTime(post.body)}
                />

                <h1 className="mt-10 text-4xl font-bold text-gray-800">
                    {post.title}
                </h1>
            </div>
        </main>
    );
};

export default PostContent;
