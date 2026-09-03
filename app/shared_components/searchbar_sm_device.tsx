import { Search } from "lucide-react";

export default function MobileSearchBar() {
    return (
        <div className="fixed  top-0 z-50 w-full px-[5%] py-3 lg:hidden mt-16">
            <div className="relative w-full rounded-md bg-zinc-100">
                <input
                    type="text"
                    placeholder="Search"
                    className="
                        w-full
                        rounded-md
                        bg-transparent
                        py-3
                        pl-4
                        pr-12
                        text-sm
                        text-black
                        outline-none
                        placeholder:text-zinc-500
                    "
                />

                <Search
                    size={20}
                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-zinc-600
                    "
                />
            </div>
        </div>
    );
}