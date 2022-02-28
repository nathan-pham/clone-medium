export default {
    name: "comment",
    title: "Comment",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "approved",
            title: "Approved",
            description: "Approve comment to be visible",
            type: "boolean",
        },
        {
            name: "response",
            title: "Response",
            type: "text",
        },
        {
            name: "post",
            title: "Post",
            type: "reference",
            to: [{ type: "post" }],
        },
    ],
};
