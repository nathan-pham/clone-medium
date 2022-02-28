export const getReadingTime = (body: object[]): number => {
    return (
        Math.round(
            body
                .filter((child: any) => child._type == "block")
                .map((child: any) => child.children[0].text.length || 0)
                .reduce((acc, curr) => acc + curr, 0) / 200
        ) + 1
    );
};

export const getFormattedDate = (_createdAt: string): string => {
    const postDate = new Date(_createdAt);
    const formattedDate = `${postDate.toLocaleString("default", {
        month: "short",
    })} ${postDate.getDate()}`;

    return formattedDate;
};
