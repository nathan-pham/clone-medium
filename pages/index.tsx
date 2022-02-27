import type { NextPage } from "next";
import Head from "next/head";

import Header from "components/Header";
import HeaderBanner from "components/HeaderBanner";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Medium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <HeaderBanner />

            {/* Posts */}
        </div>
    );
};

export default Home;
