import React from "react";

interface PrimaryButtonProps {
    label: string;
    type: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
}

export default function PrimaryButton({ label, type, onClick }: PrimaryButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className="w-full border px-md py-sm uppercase text-small cursor-pointer group"
        >
            <span className="group-hover:underline underline-offset-2">{label}</span>
        </button>
    );
}
