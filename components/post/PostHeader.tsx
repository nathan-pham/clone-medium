import {
    HomeOutline,
    NotificationsOutline,
    BookmarksOutline,
    DocumentOutline,
    PencilOutline,
} from "react-ionicons";

interface HeaderIconProps {
    type: Function;
}

const HeaderIcon = ({ type }: HeaderIconProps) => {
    return (
        <span className="cursor-pointer text-gray-500 transition-colors hover:text-black">
            {type({ color: "inherit", width: "22px", height: "22px" })}
        </span>
    );
};

const PostHeader = () => {
    return (
        <header className="fixed left-0 top-0 flex h-screen w-24 flex-col items-center justify-center gap-8 border-r border-r-gray-300 text-gray-400">
            <img
                src="/medium-single-logo.svg"
                className="absolute top-10 w-10 object-cover"
            />

            <HeaderIcon type={HomeOutline} />
            <HeaderIcon type={NotificationsOutline} />
            <HeaderIcon type={BookmarksOutline} />
            <HeaderIcon type={DocumentOutline} />

            <span className="w-[22px] border-b border-b-gray-300"></span>

            <HeaderIcon type={PencilOutline} />
        </header>
    );
};

export default PostHeader;
