import PortableText from "react-portable-text";

import { Post } from "typings";
import { getFormattedDate, getReadingTime } from "utils/post";
import { urlFor } from "utils/sanity";

import PostAuthorSummary from "./PostAuthorSummary";

interface PostContentProps {
    post: Post;
}

interface PostBodyProps {
    body: object[];
}

const PostBody = ({ body }: PostBodyProps) => {
    return (
        <div className="prose prose-xl prose-zinc font-serif">
            <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={body}
            />
        </div>
    );
};

const PostContent = ({ post }: PostContentProps) => {
    return (
        <div className="px-24">
            <main className="mx-auto max-w-7xl px-0 pt-24 lg:mx-0 lg:w-[65vw] lg:max-w-none lg:px-[10vw] lg:pt-16">
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
                    className="my-8 w-full max-w-full"
                />

                <PostBody body={post.body} />

                <div className="h-20"></div>
            </main>
        </div>
    );
};

export default PostContent;
