import { cn } from "@/app/lib/utils";

interface InputProps {
    label: string;
    name: string;
    type?: string;
}

export default function Input({ label, name, type = "text" }: InputProps) {
    return (
        <div
            className={cn(
                "relative border-b border-primary/20 group",
                "focus-within:border-black transition-colors duration-200",
            )}
        >
            <label
                htmlFor={name}
                className={cn(
                    "absolute py-sm text-text-muted",
                    "group-focus-within:text-text transition-colors duration-200",
                )}
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className={cn(
                    "pl-20 md:pl-30 py-sm w-full text-text-muted",
                    "focus:outline-none focus:text-text",
                )}
            />
        </div>
    );
}
