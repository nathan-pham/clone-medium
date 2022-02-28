import { SearchOutline } from "react-ionicons";

const PostSearch = () => {
    return (
        <div className="mt-10 flex w-full items-center rounded-full border border-gray-300 py-2 px-3">
            <SearchOutline width="20px" height="20px" />
            <input
                placeholder="Search"
                className="ml-2 h-full p-0 outline-none placeholder:text-gray-700"
            />
        </div>
    );
};

export default PostSearch;
