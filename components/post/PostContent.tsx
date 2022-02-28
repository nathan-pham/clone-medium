import { Post } from "typings";
import { getFormattedDate, getReadingTime } from "utils/post";
import { urlFor } from "utils/sanity";

import PostAuthorSummary from "./PostAuthorSummary";

interface PostContentProps {
    post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
    return (
        <main className="px-24">
            <div className="mx-auto max-w-7xl px-0 pt-24 lg:mx-0 lg:w-[65vw] lg:max-w-none lg:px-[10vw] lg:pt-16">
                <PostAuthorSummary
                    image={post.author.image}
                    name={post.author.name}
                    formattedDate={getFormattedDate(post._createdAt)}
                    readingTime={getReadingTime(post.body)}
                />

                <h1 className="mt-8 text-4xl font-bold text-gray-800">
                    {post.title}
                </h1>

                <img
                    src={urlFor(post.mainImage).url()}
                    className="mt-8 w-full"
                />
            </div>
        </main>
    );
};

export default PostContent;
