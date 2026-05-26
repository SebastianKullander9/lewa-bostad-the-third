"use client";

import { menu } from "./menu";
import Link from "next/link";
import logo from "@/public/logo/logo_green.png";
import Image from "next/image";
import ContactDetails from "../contactDetails/ContactDetails";
import { IconChevronRightFillDuo18 } from "nucleo-ui-fill-duo-18";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    const pathname = usePathname();

    const handleHome = () => {
        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname, setIsOpen]);

    return (
        <div
            className={`${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col fixed inset-0 base-x-p base-y-p bg-surface z-9999 transition-transform duration-300 ease-out`}
        >
            <div className="flex justify-between">
                <Link href="/" aria-label="Lewa Bostad - Till startsidan" onClick={handleHome}>
                    <Image
                        src={logo}
                        alt="The logo for the company lewa bostad"
                        className="h-7 md:h-11 w-auto"
                        priority
                    />
                </Link>
                <button onClick={() => setIsOpen(false)} className="relative w-5.5 h-5.5">
                    <span className="absolute top-1/2 left-0 w-5.5 h-0.5 bg-primary -translate-y-1/2 rotate-45" />
                    <span className="absolute top-1/2 left-0 w-5.5 h-0.5 bg-primary -translate-y-1/2 -rotate-45" />
                </button>
            </div>
            <div className="w-full flex-1 flex items-center">
                <nav className="w-full flex flex-col gap-sm">
                    <Link
                        className="text-display text-text flex flex-row justify-between items-center border-b border-text/10 py-md"
                        href="/"
                        onClick={handleHome}
                    >
                        <span>Hem</span>
                        <IconChevronRightFillDuo18 size={16} />
                    </Link>
                    {menu.map((item) => (
                        <Link
                            className="text-display text-text flex flex-row items-center justify-between w-full border-b border-text/10 py-md"
                            key={item.href}
                            href={item.href}
                        >
                            <span>{item.label}</span>
                            <IconChevronRightFillDuo18 size={16} />
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="text-black flex flex-row justify-between items-end">
                <div>
                    <ContactDetails hideLabels={true} />
                </div>

                <Link
                    href="/integritetspolicy"
                    className="text-small text-text hover:opacity-60 transition-opacity"
                >
                    Integritetspolicy
                </Link>
            </div>
        </div>
    );
}
