import type { ReactNode } from "react";
import type { Post } from "typings";

import PostCard from "./PostCard";
import PostCategory from "./PostCategory";

import Footer from "./Footer";

interface PostCardContainerProps {
    posts: Post[];
}

const postCategories = [
    "Self",
    "Relationships",
    "Data Science",
    "Programming",
    "Productivity",
    "Javascript",
    "Machine Learning",
    "Politics",
    "Health",
];

const PostCardContainer = ({ posts }: PostCardContainerProps) => {
    return (
        <section className="flex flex-col-reverse px-6 md:px-40 lg:grid lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
                {posts.map((post) => (
                    <PostCard {...post} key={post._id} />
                ))}
            </div>
            <div className="mt-16 lg:col-span-2">
                <h2 className="text-sm font-semibold uppercase">
                    Discover more of what matters to you
                </h2>

                <div className="mt-4 flex flex-wrap gap-2 border-b border-b-gray-300 pb-8">
                    {postCategories.map((category) => (
                        <PostCategory key={category}>{category}</PostCategory>
                    ))}
                </div>

                <Footer />
            </div>
        </section>
    );
};

export default PostCardContainer;
