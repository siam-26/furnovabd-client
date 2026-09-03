'use client'


import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type SubCategory = {
    id: string;
    name: string;
    href: string;
};

type Category = {
    id: string;
    name: string;
    href: string;
    subcategories: SubCategory[];
};

// Later this data can directly come from your API.
const categories: Category[] = [
    {
        id: "living-room",
        name: "Living Room",
        href: "#",
        subcategories: [
            { id: "sofa", name: "Sofa", href: "#" },
            { id: "coffee-table", name: "Coffee Table", href: "#" },
            { id: "tv-unit", name: "TV Unit", href: "#" },
            { id: "recliner", name: "Recliner", href: "#" },
        ],
    },
    {
        id: "bedroom",
        name: "Bedroom",
        href: "#",
        subcategories: [
            { id: "bed", name: "Bed", href: "#" },
            { id: "wardrobe", name: "Wardrobe", href: "#" },
            { id: "bedside-table", name: "Bedside Table", href: "#" },
            { id: "dresser", name: "Dresser", href: "#" },
        ],
    },
    {
        id: "dining-room",
        name: "Dining Room",
        href: "#",
        subcategories: [
            { id: "dining-table", name: "Dining Table", href: "#" },
            { id: "dining-chair", name: "Dining Chair", href: "#" },
            { id: "sideboard", name: "Sideboard", href: "#" },
        ],
    },
    {
        id: "kitchen",
        name: "Kitchen",
        href: "#",
        subcategories: [
            { id: "kitchen-cabinet", name: "Kitchen Cabinet", href: "#" },
            { id: "kitchen-island", name: "Kitchen Island", href: "#" },
            { id: "kitchen-stool", name: "Kitchen Stool", href: "#" },
        ],
    },
    {
        id: "door",
        name: "Door",
        href: "#",
        subcategories: [
            { id: "main-door", name: "Main Door", href: "#" },
            { id: "interior-door", name: "Interior Door", href: "#" },
            { id: "sliding-door", name: "Sliding Door", href: "#" },
        ],
    },
    {
        id: "interior",
        name: "Interior",
        href: "#",
        subcategories: [
            { id: "wall-decor", name: "Wall Decor", href: "#" },
            { id: "lighting", name: "Lighting", href: "#" },
            { id: "mirror", name: "Mirror", href: "#" },
        ],
    },
    {
        id: "office",
        name: "Office",
        href: "#",
        subcategories: [
            { id: "office-desk", name: "Office Desk", href: "#" },
            { id: "office-chair", name: "Office Chair", href: "#" },
            { id: "bookshelf", name: "Bookshelf", href: "#" },
        ],
    },
];

export default function CategoryNavbar() {
    const [activeCategory, setActiveCategory] =
        useState<Category | null>(null);

    return (
        <nav className="hidden md:block bg-zinc-900 text-white">
            <div className="relative" onMouseLeave={() => {
                setActiveCategory(null);
            }}>

                {/* Categories */}
                <div className="flex">
                    <ul className="flex items-center">
                        {categories.map((category) => {
                            const hasSubcategories =
                                category.subcategories.length > 0;

                            return (
                                <li
                                    key={category.id}
                                    onMouseEnter={() => {
                                        if (hasSubcategories) {
                                            setActiveCategory(category);
                                        }
                                    }}

                                >
                                    <Link
                                        href={category.href}
                                        className="
                                            flex items-center gap-1
                                            px-5 py-4
                                            text-sm font-medium
                                            hover:bg-zinc-800
                                        "
                                    >
                                        {category.name}

                                        {hasSubcategories && (
                                            <ChevronDown size={15} />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>


                {/* ONE COMMON DROPDOWN */}
                {activeCategory && (
                    <div
                        className="
                            absolute
                            left-1/2
                            top-full
                            z-50
                            w-[60vw]
                            max-w-4xl
                            -translate-x-1/2

                            bg-white
                            px-8
                            py-6
                            shadow-xl
                        "
                    >
                        <div className="flex flex-col gap-3">
                            {activeCategory.subcategories.map(
                                (subcategory) => (
                                    <Link
                                        key={subcategory.id}
                                        href={subcategory.href}
                                        className="
                                            w-fit
                                            text-sm
                                            text-black
                                            hover:underline
                                        "
                                    >
                                        {subcategory.name}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
}
