import { Author } from "typings";

import PostSearch from "./PostSearch";
import PostAuthor from "./PostAuthor";

import Footer from "../Footer";

interface PostSimilarProps {
    author: Author;
}

const PostSimilar = ({ author }: PostSimilarProps) => {
    console.log(author);

    return (
        <aside className="fixed right-0 top-0 h-screen w-[calc(35vw-6rem)] border-l border-l-gray-300 py-10 px-10">
            <div className="flex items-center gap-6">
                <a
                    href="#"
                    className="w-full rounded-full bg-gray-800 py-2 text-center text-white transition-colors hover:bg-gray-900"
                >
                    Get Started
                </a>
                <a
                    href="#"
                    className="whitespace-nowrap text-blue-400 transition-colors hover:text-black"
                >
                    Sign in
                </a>
            </div>

            <PostSearch />
            <PostAuthor {...author} />
            <Footer variant="text-sm" />
        </aside>
    );
};

export default PostSimilar;
