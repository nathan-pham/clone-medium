export interface Author {
    name: string;
    image: string;
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
}
