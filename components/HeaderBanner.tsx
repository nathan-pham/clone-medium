const HeaderBanner = () => {
    return (
        <div className="relative overflow-hidden border-b border-b-black bg-yellow-400 py-8 px-6 md:px-40">
            <img
                src="medium-quotes.png"
                className="absolute right-0 bottom-0 z-0 w-96 object-contain lg:right-52"
            />

            <div className="z-1 relative max-w-xl">
                <h1 className="font-serif text-7xl">
                    Medium is a place to write, read, and connect
                </h1>
                <p className="mt-2 text-lg leading-snug">
                    It's easy and free to post your thinking on any topic and
                    connect with millions of readers.
                </p>
                <a
                    href="#"
                    className="mt-6 block w-fit rounded-full border border-black bg-white px-5 py-2"
                >
                    Start Writing
                </a>
            </div>
        </div>
    );
};

export default HeaderBanner;
