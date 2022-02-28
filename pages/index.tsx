import type { NextPage } from "next";
import type { Post } from "typings";

import Head from "next/head";

import Header from "components/Header";
import HeaderBanner from "components/HeaderBanner";

import PostCardContainer from "components/PostCardContainer";

import { sanityClient } from "utils/sanity";

interface Props {
    posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>Medium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <HeaderBanner />

            <PostCardContainer posts={posts} />

            <div className="h-20"></div>
        </div>
    );
};

export default Home;

export const getServerSideProps = async () => {
    const query = `
        *[_type == "post"] {
            _id,
            _createdAt,
            title,
            mainImage,
            description,
            slug,
            body,
            author -> {
                name,
                image
            }
        }
    `;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        },
    };
};
