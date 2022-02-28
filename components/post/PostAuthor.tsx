import { urlFor } from "utils/sanity";

interface PostAuthorProps {
    name: string;
    image: string;
    bio: object[];
}

const PostAuthor = ({ name, image, bio }: PostAuthorProps) => {
    const formattedBio = bio
        .map((child: any) => child?.children[0].text)
        .join("\n");

    console.log(formattedBio);

    return (
        <div className="mt-10">
            <img
                src={urlFor(image).url()}
                className="h-24 w-24 rounded-full object-cover"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">{name}</h2>
            <p className="mt-2 text-sm text-gray-500 text-gray-400">
                {formattedBio}
            </p>
        </div>
    );
};

export default PostAuthor;
