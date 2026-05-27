"use client";

import { useState } from "react";
import logo from "@/public/logo/logo_white.png";
import Image from "next/image";
import { menu } from "./menu";
import Link from "next/link";
import Hamburger from "../hamburger/Hamburger";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header
                className="fixed w-full base-x-p base-y-p-header z-100 section-primary"
                role="banner"
            >
                <div className="flex flex-row justify-between items-center">
                    <Link href="/" aria-label="Lewa Bostad - Till startsidan">
                        <Image
                            src={logo}
                            alt="The logo for the company lewa bostad"
                            className="h-7 md:h-9 w-auto"
                            priority
                        />
                    </Link>

                    <nav
                        className="hidden md:flex flex-row gap-3xl text-body text-surface mb-0"
                        aria-label="Huvudnavigation"
                    >
                        {menu.map((item, index) => (
                            <Link key={index} href={item.href} className="link-hover-fade">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="md:hidden cursor-pointer z-9999">
                        <Hamburger isOpen={isOpen} setState={setIsOpen} />
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

            <div
                className={`${isOpen ? "opacity-100" : "opacity-0"} fixed inset-0 bg-black/10 backdrop-blur-xs z-9998 pointer-events-none transition-opacity duration-200`}
            ></div>
        </>
    );
}
