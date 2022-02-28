import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type { Post } from "typings";

import { sanityClient } from "utils/sanity";

import PostHeader from "components/post/PostHeader";
import PostContent from "components/post/PostContent";
import PostSimilar from "components/post/PostSimilar";

interface PostPageProps {
    post: Post;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
    console.log(post);
    return (
        <>
            <PostHeader />
            <PostContent post={post} />
            <PostSimilar author={post.author} />
        </>
    );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `
        *[_type == "post"] {
            _id,
            slug {
                current
            }
        }
    `;

    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post: Post) => ({
        params: { slug: post.slug.current },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
        *[_type == "post" && slug.current == $slug][0] {
            _id,
            _createdAt,
            title,
            mainImage,
            description,
            slug,
            body,
            author -> {
                name,
                image,
                bio
            }
        }
    `;

    const post: Post = await sanityClient.fetch(query, { slug: params?.slug });

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
    };
};
