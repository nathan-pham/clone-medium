import Link from "next/link";

const Header = () => {
    return (
        <header className="flex items-center justify-between border-b border-b-black bg-yellow-400 py-6 px-6 md:px-20 xl:px-40">
            <div>
                <Link href="/">
                    <img
                        src="/medium-logo.svg"
                        alt="Medium Logo"
                        className="w-44 cursor-pointer object-contain"
                    />
                </Link>
            </div>
            <nav className="flex items-center gap-6">
                <div className="hidden gap-[inherit] lg:inline-flex">
                    <a href="#">Our story</a>
                    <a href="#">Membership</a>
                    <a href="#">Write</a>
                </div>

                <a href="#">Sign In</a>
                <a
                    href="#"
                    className="rounded-full bg-black px-5 py-2 text-white"
                >
                    Get Started
                </a>
            </nav>
        </header>
    );
};

export default Header;
