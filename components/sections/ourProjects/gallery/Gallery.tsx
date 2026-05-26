import { Project } from "../data";
import { IconChevronLeftFillDuo18 } from "nucleo-ui-fill-duo-18";
import Image from "next/image";
import { imageSizes } from "@/app/lib/imageSizes";
import { useEffect } from "react";

interface GalleryProps {
    isGalleryOpen: boolean;
    project: Project;
    onClick: () => void;
}

export default function Gallery({ isGalleryOpen, project, onClick }: GalleryProps) {
    useEffect(() => {
        document.body.style.overflow = isGalleryOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isGalleryOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClick();
        };
        if (isGalleryOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isGalleryOpen, onClick]);

    return (
        <section
            className={`${isGalleryOpen ? "opacity-100" : "opacity-0 pointer-events-none"} fixed z-9999 inset-0 bg-surface overflow-y-auto`}
        >
            <div className="sticky top-0 bg-surface border-b border-text/20 z-10">
                <div className="base-x-p md:px-0 container mx-auto flex flex-row justify-between items-center">
                    <button
                        onClick={onClick}
                        type="button"
                        className="flex flex-row items-center gap-xs h-full base-y-p hover:underline underline-offset-2"
                    >
                        <IconChevronLeftFillDuo18 size={14} className="text-text" />
                        <span className="text-body text-text">Gå tillbaka</span>
                    </button>
                    <div>
                        <p className="text-text text-body">{project.title}</p>
                    </div>
                </div>
            </div>
            <div className="base-x-p md:px-0 base-y-p md:py-xl container mx-auto flex flex-col gap-y-md md:gap-y-xl ">
                {project.images.gallery.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={1920}
                            height={1080}
                            className="object-contain aspect-auto"
                            placeholder="blur"
                            sizes={imageSizes.fullWidth}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
