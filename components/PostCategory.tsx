import type { ReactNode } from "react";

interface PostCategoryProps {
    children: ReactNode;
}

const PostCategory = ({ children }: PostCategoryProps) => {
    return (
        <a
            className="rounded-sm border border-gray-300 py-2 px-4 text-sm text-gray-500"
            href="#"
        >
            {children}
        </a>
    );
};

export default PostCategory;
