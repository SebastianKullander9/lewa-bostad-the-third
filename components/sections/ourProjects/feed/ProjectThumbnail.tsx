import { Project } from "../data";
import Image from "next/image";
import Link from "next/link";
import { imageSizes } from "@/app/lib/imageSizes";

interface ProjectThumbnailProps {
    project: Project;
    index: number;
}

export default function ProjectThumbnail({ project, index }: ProjectThumbnailProps) {
    return (
        <Link
            href={`/vara-projekt/${project.slug}`}
            className="col-span-12 md:col-span-6 cursor-default group"
        >
            <article>
                <div className="relative aspect-3/2 overflow-hidden flex">
                    <Image
                        src={project.images.thumbnail.src}
                        className="object-cover transition-transform duration-650 group-hover:scale-[1.02]"
                        fill
                        sizes={imageSizes.halfWidth}
                        priority={index < 2}
                        alt={project.images.thumbnail.alt}
                    />
                </div>
                <div className="mt-sm flex flex-row md:flex-col justify-between">
                    <div>
                        <p className="text-lead text-text">{project.title}</p>
                        <p className="text-body text-text-muted group-hover:text-text transition-colors duration-200 mb-0">
                            {project.location}
                        </p>
                    </div>

                    <p className="text-body text-text-muted group-hover:text-text transition-colors duration-200">
                        {project.status}
                    </p>
                </div>
            </article>
        </Link>
    );
}
