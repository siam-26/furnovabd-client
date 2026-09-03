"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Search,
    MapPin,
    UserRound,
    Heart,
    ShoppingCart,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";

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

type DesktopNavItemProps = {
    href: string;
    icon: React.ReactNode;
    label: string;
};

function DesktopNavItem({
    href,
    icon,
    label,
}: DesktopNavItemProps) {
    return (
        <Link
            href={href}
            className="group flex min-w-17 flex-col items-center justify-center gap-1 text-gray-700 transition-colors duration-200 hover:text-[#1F4D3A]"
        >
            <span className="transition-colors duration-200 group-hover:text-[#1F4D3A]">
                {icon}
            </span>

            <span className="whitespace-nowrap text-xs font-medium">
                {label}
            </span>
        </Link>
    );
}

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (categoryId: string) => {
        setOpenCategory((current) =>
            current === categoryId ? null : categoryId
        );
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
        setOpenCategory(null);
    };

    return (
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <header className="fixed inset-x-0 top-0 z-50 hidden lg:block">
                <nav className="border-b border-white/30 bg-white/70 shadow-sm backdrop-blur-xl">
                    <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6">
                        {/* Logo */}
                        <Link
                            href="#"
                            className="shrink-0"
                            aria-label="Home"
                        >
                            <Image
                                src="/logo_removebg.png"
                                alt="Logo"
                                width={150}
                                height={60}
                                className="h-auto w-36 object-contain"
                                priority
                            />
                        </Link>

                        {/* Search Desktop */}
                        <div className="flex flex-1 justify-center">
                            <div className="relative w-full max-w-3xl">
                                <Search
                                    size={21}
                                    strokeWidth={1.8}
                                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="search"
                                    placeholder="Search products..."
                                    className="h-12 w-full rounded-xl border border-gray-300 bg-white/80 pl-12 pr-5 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#1F4D3A] focus:ring-1 focus:ring-[#1F4D3A]"
                                />
                            </div>
                        </div>

                        {/* Right Navigation */}
                        <div className="flex shrink-0 items-center gap-5">
                            <DesktopNavItem
                                href="#"
                                label="Track Order"
                                icon={
                                    <MapPin
                                        size={22}
                                        strokeWidth={1.7}
                                    />
                                }
                            />

                            <DesktopNavItem
                                href="#"
                                label="Sign In"
                                icon={
                                    <UserRound
                                        size={22}
                                        strokeWidth={1.7}
                                    />
                                }
                            />

                            <DesktopNavItem
                                href="#"
                                label="Wishlist"
                                icon={
                                    <Heart
                                        size={22}
                                        strokeWidth={1.7}
                                    />
                                }
                            />

                            <DesktopNavItem
                                href="#"
                                label="Cart"
                                icon={
                                    <ShoppingCart
                                        size={22}
                                        strokeWidth={1.7}
                                    />
                                }
                            />
                        </div>
                    </div>
                </nav>
            </header>

            {/* ================= MOBILE / TABLET NAVBAR ================= */}
            <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
                <nav className="border-b border-white/30 bg-white/70 shadow-sm backdrop-blur-xl">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                        {/* Hamburger */}
                        <button
                            type="button"
                            onClick={() => setIsSidebarOpen(true)}
                            aria-label="Open menu"
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors duration-200 hover:bg-[#1F4D3A]/10 hover:text-[#1F4D3A]"
                        >
                            <Menu size={25} strokeWidth={1.8} />
                        </button>

                        {/* Center Logo */}
                        <Link
                            href="#"
                            aria-label="Home"
                            className="absolute left-1/2 -translate-x-1/2"
                        >
                            <Image
                                src="/logo_removebg.png"
                                alt="Logo"
                                width={130}
                                height={55}
                                className="h-auto w-28 object-contain"
                                priority
                            />
                        </Link>

                        {/* Right Icons */}
                        <div className="ml-auto flex items-center gap-1">
                            <Link
                                href="#"
                                aria-label="Sign In / Register"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors duration-200 hover:bg-[#1F4D3A]/10 hover:text-[#1F4D3A]"
                            >
                                <UserRound size={22} strokeWidth={1.8} />
                            </Link>

                            <Link
                                href="#"
                                aria-label="Cart"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors duration-200 hover:bg-[#1F4D3A]/10 hover:text-[#1F4D3A]"
                            >
                                <ShoppingCart size={22} strokeWidth={1.8} />
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            {/* ================= SIDEBAR OVERLAY ================= */}
            <div
                className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 lg:hidden ${isSidebarOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                onClick={closeSidebar}
                aria-hidden="true"
            />

            {/* ================= SIDEBAR ================= */}
            <aside
                className={`fixed left-0 top-0 z-[70] flex h-dvh w-[60vw] min-w-[280px] max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${isSidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex h-20 shrink-0 items-center justify-between border-b border-gray-200 px-5">
                    <Link
                        href="#"
                        onClick={closeSidebar}
                        aria-label="Home"
                    >
                        <Image
                            src="/logo_removebg.png"
                            alt="Logo"
                            width={125}
                            height={50}
                            className="h-auto w-28 object-contain"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={closeSidebar}
                        aria-label="Close menu"
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors duration-200 hover:bg-[#1F4D3A]/10 hover:text-[#1F4D3A]"
                    >
                        <X size={25} strokeWidth={1.8} />
                    </button>
                </div>

                {/* ================= SCROLLABLE SIDEBAR CONTENT ================= */}
                <div className="min-h-0 flex-1 overflow-y-auto">
                    {/* Home */}
                    <Link
                        href="#"
                        onClick={closeSidebar}
                        className="flex items-center border-b border-gray-100 px-5 py-4 text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1F4D3A]"
                    >
                        Home
                    </Link>

                    {/* Categories */}
                    <div className="border-b border-gray-100">
                        {categories.map((category) => {
                            const isOpen =
                                openCategory === category.id;

                            return (
                                <div
                                    key={category.id}
                                    className="border-b border-gray-100 last:border-b-0"
                                >
                                    {/* Category */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleCategory(category.id)
                                        }
                                        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1F4D3A]"
                                    >
                                        <span>{category.name}</span>

                                        <ChevronDown
                                            size={18}
                                            strokeWidth={1.8}
                                            className={`shrink-0 transition-transform duration-300 ${isOpen
                                                    ? "rotate-180 text-[#1F4D3A]"
                                                    : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Subcategories */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="bg-gray-50 px-5 pb-2">
                                                {category.subcategories.map(
                                                    (subcategory) => (
                                                        <Link
                                                            key={subcategory.id}
                                                            href={subcategory.href}
                                                            onClick={closeSidebar}
                                                            className="block border-b border-gray-200 py-3 pl-3 text-sm text-gray-600 transition-colors duration-200 last:border-b-0 hover:text-[#1F4D3A]"
                                                        >
                                                            {subcategory.name}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Links inside scroll area */}
                    <div className="px-5 py-4">
                        <Link
                            href="#"
                            onClick={closeSidebar}
                            className="block py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#1F4D3A]"
                        >
                            Contact Us
                        </Link>

                        <Link
                            href="#"
                            onClick={closeSidebar}
                            className="block py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-[#1F4D3A]"
                        >
                            Track Order
                        </Link>
                    </div>
                </div>

                {/* ================= FIXED BOTTOM BUTTON AREA ================= */}
                <div className="shrink-0 border-t border-gray-200 bg-white p-4">
                    <Link
                        href="#"
                        onClick={closeSidebar}
                        className="flex h-12 w-full items-center justify-center rounded-xl bg-[#1F4D3A] px-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#173b2d] active:scale-[0.98]"
                    >
                        Sign In / Register
                    </Link>
                </div>
            </aside>
        </>
    );
}