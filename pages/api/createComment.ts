import type { NextApiRequest, NextApiResponse } from "next";
import { config, createSanityClient } from "utils/sanity";

const sanityClient = createSanityClient({
    ...config,
    token: process.env.SANITY_API_TOKEN,
});

type Data = {
    message?: string;
};

const createComment = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    if (req.method !== "POST") {
        res.status(404).end();
        return;
    }

    try {
        const { _id, name, response } = JSON.parse(req.body);

        await sanityClient.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id,
            },
            name,
            response,
            approved: false,
        });
    } catch (e: any) {
        res.status(500).json({ message: e.message });
        return;
    }

    res.status(200).json({ message: "Comment submitted" });
};

export default createComment;
