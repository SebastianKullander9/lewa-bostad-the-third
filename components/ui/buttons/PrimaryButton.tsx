import React from "react";
import Link from "next/link";

interface PrimaryButtonProps {
    label: string;
    type: "submit" | "reset" | "button" | "link";
    href?: string;
    onClick?: () => void;
}

const className =
    "bg-[var(--btn-bg)] text-[var(--btn-text)] w-full px-md py-sm uppercase text-small cursor-pointer tracking-widest hover:opacity-80 transition-opacity";

export default function PrimaryButton({ label, type, href, onClick }: PrimaryButtonProps) {
    if (type === "link" && href) {
        return (
            <Link href={href} className={className}>
                {label}
            </Link>
        );
    }

    return (
        <button onClick={onClick} type={type as "submit" | "reset" | "button"} className={className}>
            {label}
        </button>
    );
}
