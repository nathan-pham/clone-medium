import type { ReactNode } from "react";

interface PostCardContainerProps {
    children: ReactNode;
}

const PostCardContainer = ({ children }: PostCardContainerProps) => {
    return <section className="px-6 md:px-40">{children}</section>;
};

export default PostCardContainer;
