'use client';
import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiOutlineSlash } from "react-icons/hi2";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

    const menuItems = [
        "Home",
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Blog",
        "Contact",
    ];

    // Detect active section
    useEffect(() => {
        const sections = menuItems.map(item => document.getElementById(item.toLowerCase()));

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // 60% of section visible
        );

        sections.forEach(section => section && observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 py-2">
            <div className="container mx-auto px-4">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between px-6 py-5">

                        {/* Logo */}
                        <Link href="/" className="text-primary flex items-center text-3xl font-semibold tracking-wide">
                            <FaChevronLeft /> Nerob <HiOutlineSlash className="text-4xl -mr-4" /> <FaChevronRight />
                        </Link>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center gap-10">
                            {menuItems.map(item => {
                                const id = item.toLowerCase();
                                const isActive = active === id;
                                return (
                                    <a
                                        key={id}
                                        href={`#${id}`}
                                        className={`relative text-base font-medium transition-all duration-300
                      ${isActive ? "text-primary" : "text-white hover:text-primary"}`}
                                    >
                                        {item}
                                        <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300
                        ${isActive ? "w-full" : "w-0"}`}
                                        />
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white text-2xl"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <HiX /> : <HiMenuAlt3 />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <nav className="flex flex-col gap-4 px-6 pb-6">
                            {menuItems.map(item => {
                                const id = item.toLowerCase();
                                const isActive = active === id;
                                return (
                                    <a
                                        key={id}
                                        href={`#${id}`}
                                        onClick={() => setOpen(false)}
                                        className={`text-sm font-medium transition
                      ${isActive ? "text-primary" : "text-white hover:text-primary"}`}
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
