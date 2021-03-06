import type { Post } from "typings";

import Link from "next/link";
import { urlFor } from "utils/sanity";

import { getFormattedDate, getReadingTime } from "utils/post";

const PostCard = (props: Post) => {
    return (
        <Link href={`/post/${props.slug.current}`}>
            <article className="mt-16 flex w-full cursor-pointer justify-between gap-4">
                <div>
                    <div className="flex items-center">
                        <img
                            src={urlFor(props.author.image).url()}
                            alt={`${props.author.name}'s Profile Picture`}
                            className="mr-2 h-5 w-5 rounded-full object-cover"
                        />
                        <span className="font-semibold">
                            {props.author.name}
                        </span>
                    </div>

                    <h1 className="mt-2 text-2xl font-bold">{props.title}</h1>
                    <p className="text-gray-600">{props.description}</p>

                    <div className="mt-2 flex text-sm text-gray-600">
                        <span>{getFormattedDate(props._createdAt)}</span>
                        <span className="mx-2">·</span>
                        <span>{getReadingTime(props.body)} min read</span>
                    </div>
                </div>
                <img
                    src={urlFor(props.mainImage).url()}
                    alt={`${props.title}'s Featured Image`}
                    className="h-30 w-52 object-cover"
                />
            </article>
        </Link>
    );
};

export default PostCard;
