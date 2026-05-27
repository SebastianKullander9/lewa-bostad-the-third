import React from "react";

interface HamburgerProps {
    isOpen: boolean;
    setState: (isOpen: boolean) => void;
}

export default function Hamburger({ isOpen, setState }: HamburgerProps) {
    return (
        <>
            <button
                onClick={() => setState(true)}
                type="button"
                className="flex flex-col gap-1"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                <span className="w-5.5 h-0.5 bg-surface" />
                <span className="w-5.5 h-0.5 bg-surface" />
                <span className="w-5.5 h-0.5 bg-surface" />
            </button>
        </>
    );
}
