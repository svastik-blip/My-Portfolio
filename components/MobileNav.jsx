"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle from Radix UI

const Links = [
    { name: "Home", path: "/ " },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
];

const MobileNav = ({ name }) => {
    const pathname = usePathname();

    return (
        <Sheet>
            {/* Trigger for opening the sheet */}
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            {/* Content inside the sheet */}
            <SheetContent className="bg-black flex flex-col items-center">
                {/* Adding DialogTitle for accessibility */}
                <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

                {/* Name at the top */}
                <div className="text-3xl font-bold mt-6 mb-8 text-white">
                    {name}
                </div>

                {/* Centered name and link */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Svastik Arora<span className="text-accent"></span>
                        </h1>
                    </Link>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col gap-8 justify-center items-center">
                    {Links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`${
                                pathname === link.path
                                    ? "text-white font-bold" // White and bold for active link
                                    : "text-gray-400" // Gray for inactive links
                            } text-xl transition-all duration-300 hover:text-accent hover:scale-110`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
