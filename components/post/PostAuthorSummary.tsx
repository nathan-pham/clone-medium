import { urlFor } from "utils/sanity";

interface PostAuthorProps {
    image: string;
    name: string;
    formattedDate: string;
    readingTime: number;
}

const PostAuthor = ({
    image,
    name,
    formattedDate,
    readingTime,
}: PostAuthorProps) => {
    return (
        <div className="flex items-center gap-4">
            <img
                src={urlFor(image).url()}
                className="h-12 w-12 rounded-full object-cover"
            />
            <div>
                <h3 className="text-lg text-gray-800">{name}</h3>

                <div className="flex text-gray-600">
                    <span>{formattedDate}</span>
                    <span className="mx-2">·</span>
                    <span>{readingTime} min read</span>
                </div>
            </div>
        </div>
    );
};

export default PostAuthor;
