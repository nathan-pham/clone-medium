export interface Author {
    name: string;
    image: string;
    bio: object[];
}

export interface Comment {
    _createdAt: string;
    _id: string;

    approved: boolean;
    name: string;
    response: string;

    post: {
        _ref: string;
        _type: string;
    };
}

export interface Post {
    _id: string;
    _createdAt: string;

    title: string;
    description: string;
    author: Author;

    mainImage: {
        asset: {
            url: string;
        };
    };

    slug: {
        current: string;
    };

    body: object[];
    responses?: Comment[];
}
