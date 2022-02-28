import { ShieldCheckmarkOutline, PersonOutline } from "react-ionicons";
import { useState, FormEvent } from "react";

import type { Comment } from "typings";

import IconTitle from "../IconTitle";
import { daysAgo } from "utils/post";

interface PostResponsesProps {
    _id: string;
    responses: Comment[];
}

const PostResponses = ({ _id, responses }: PostResponsesProps) => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        setSubmitted(false);

        const elements = [...((e.target as HTMLFormElement).elements as any)];
        const body = elements
            .filter((el) => el.name)
            .reduce(
                (acc, el) => ({
                    ...acc,
                    [el.name]: el.value.trim(),
                }),
                {}
            );

        try {
            const json = await fetch("/api/createComment", {
                method: "POST",
                body: JSON.stringify({
                    ...body,
                    _id,
                }),
            }).then((res) => res.json());

            setSubmitted(true);

            for (const el of elements) {
                el.value = "";
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">
                    Responses ({responses.length})
                </h3>
                <IconTitle title="Responses are moderated" variant="right-8">
                    <ShieldCheckmarkOutline />
                </IconTitle>
            </div>
            {submitted ? (
                <div className="mt-5 rounded-md bg-green-500 py-4 px-6 text-white">
                    <h1 className="text-xl font-semibold">
                        Thank you for your response!
                    </h1>
                    <p>Once approved, it will apppear below.</p>
                </div>
            ) : (
                <form
                    className="flex flex-col"
                    method="POST"
                    onSubmit={onSubmit}
                >
                    <input
                        name="name"
                        placeholder="John Doe"
                        className="mt-5 rounded-md border py-3 px-4 shadow-md outline-none"
                        type="text"
                        required
                        autoComplete="off"
                        spellCheck="false"
                        title="Please enter your name"
                    />

                    <textarea
                        name="response"
                        placeholder="What are your thoughts?"
                        className="mt-5 resize-y rounded-md border py-3 px-4 shadow-md outline-none"
                        rows={8}
                        required
                        autoComplete="off"
                        spellCheck="false"
                        title="Please enter your response"
                    ></textarea>

                    <button className="mt-5 w-fit self-end rounded-full bg-green-500 py-2 px-6 text-white transition-colors hover:bg-green-400">
                        Submit
                    </button>
                </form>
            )}

            {responses.map((response) => (
                <div
                    className="mt-5 border-t border-t-gray-300"
                    key={response._id}
                >
                    <div className="flex items-center gap-3 pt-5">
                        <div className="relative grid h-12 w-12 place-items-center rounded-full border border-green-500">
                            <div className="absolute top-1/2 left-0 z-0 h-5 w-full -translate-y-1/2 scale-125 bg-white"></div>
                            <div className="z-10 grid h-10 w-10 place-items-center rounded-full bg-gray-300">
                                <PersonOutline width="18px" height="18px" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold">{response.name}</h3>
                            <p className="text-sm text-gray-500">
                                {daysAgo(response._createdAt)} days ago
                            </p>
                        </div>
                    </div>
                    <p className="mt-4">{response.response}</p>
                </div>
            ))}
        </>
    );
};

export default PostResponses;
