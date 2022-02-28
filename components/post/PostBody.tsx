import PortableText from "react-portable-text";

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

export default PostBody;
