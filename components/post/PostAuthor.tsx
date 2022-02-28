import { MailOutline } from "react-ionicons";
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

    return (
        <div className="mt-10">
            <img
                src={urlFor(image).url()}
                className="h-24 w-24 rounded-full object-cover"
            />
            <h2 className="mt-4 text-lg font-semibold text-gray-700">{name}</h2>
            <p className="text-sm text-gray-400">{formattedBio}</p>

            <div className="mt-6 flex h-10 items-stretch gap-2">
                <a
                    href="#"
                    className="rounded-full bg-blue-500 py-2 px-4 text-white transition-colors hover:bg-blue-400"
                >
                    Follow
                </a>
                <a
                    href="#"
                    className="grid w-10 place-items-center rounded-full  bg-blue-500 transition-colors hover:bg-blue-400"
                >
                    <MailOutline color="#fff" width="20px" height="20px" />
                </a>
            </div>
        </div>
    );
};

export default PostAuthor;
