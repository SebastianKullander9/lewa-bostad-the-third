import { cn } from "@/app/lib/utils";

interface TextBoxProps {
    label: string;
    name: string;
}

export default function TextArea({ label, name }: TextBoxProps) {
    return (
        <div
            className={cn(
                "border-b border-primary/20 group",
                "focus-within:border-black transition-colors duration-200",
            )}
        >
            <label
                className={cn(
                    "py-sm text-text-muted",
                    "group-focus-within:text-text transition-colors duration-200",
                )}
                htmlFor={name}
            >
                {label}
            </label>
            <textarea
                className="focus:outline-none focus:text-text w-full"
                name={name}
                id={name}
                rows={5}
            />
        </div>
    );
}
