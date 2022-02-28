import Link from "next/link";
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
        <>
            <header className="fixed left-0 top-0 hidden h-screen w-24 flex-col items-center justify-center gap-8 border-r border-r-gray-300 text-gray-400 lg:flex">
                <Link href="/">
                    <a className="absolute top-10">
                        <img
                            src="/medium-single-logo.svg"
                            className="w-10 cursor-pointer object-cover"
                        />
                    </a>
                </Link>

                <HeaderIcon type={HomeOutline} />
                <HeaderIcon type={NotificationsOutline} />
                <HeaderIcon type={BookmarksOutline} />
                <HeaderIcon type={DocumentOutline} />

                <span className="w-[22px] border-b border-b-gray-300"></span>

                <HeaderIcon type={PencilOutline} />
            </header>

            {/* This is probably shit for SEO and accessibility but we're making another header element anyways */}
            <header className="fixed left-0 top-0 flex w-full items-center justify-between bg-white py-4 px-6 shadow-md lg:hidden">
                <Link href="/">
                    <a>
                        <img
                            src="/medium-single-logo.svg"
                            className="w-10 cursor-pointer object-cover"
                        />
                    </a>
                </Link>

                <div>
                    <a
                        href="#"
                        className="mr-4 text-blue-400 transition-colors hover:text-black"
                    >
                        Sign in
                    </a>
                    <a
                        href="#"
                        className="rounded-full bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-900"
                    >
                        Get Started
                    </a>
                </div>
            </header>
        </>
    );
};

export default PostHeader;
