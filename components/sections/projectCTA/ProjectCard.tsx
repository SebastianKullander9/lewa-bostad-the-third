import Image from "next/image";
import { StaticImageData } from "next/image";
import { imageSizes } from "@/app/lib/imageSizes";

interface ProjectCardProps {
    title: string;
    location: string;
    status: string;
    image: StaticImageData;
}

export default function ProjectCard({ title, location, status, image }: ProjectCardProps) {
    return (
        <article className="group cursor-default">
            <div className="relative aspect-3/2 w-full overflow-hidden mb-xs">
                <Image
                    src={image}
                    alt={`Lewa Bostads projekt ${title} i ${location}`}
                    fill
                    sizes={imageSizes.halfWidth}
                    className="object-cover transition-transform duration-650 group-hover:scale-[1.02]"
                />
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center md:items-start">
                <div>
                    <p className="text-lead text-text">{title}</p>
                    <p className="text-small text-text-muted group-hover:text-text transition-colors duration-200">
                        {location}
                    </p>
                </div>

                <p className="text-small text-text-muted group-hover:text-text transition-colors duration-200">
                    {status}
                </p>
            </div>
        </article>
    );
}
