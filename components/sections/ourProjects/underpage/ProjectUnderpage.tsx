"use client";

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { Project } from "../data";
import Image from "next/image";
import { imageSizes } from "@/app/lib/imageSizes";
import { useState } from "react";
import Gallery from "../gallery/Gallery";

interface ProjectUnderpageProps {
    project: Project;
}

export default function ProjectUnderpage({ project }: ProjectUnderpageProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <>
            <section className="min-h-section mt-(--header-height)">
                <div className="h-[60vh] md:h-[80vh] w-full relative">
                    <Image
                        src={project.images.gallery[0].src}
                        className="object-cover"
                        priority
                        sizes={imageSizes.fullWidth}
                        fill
                        alt={project.images.gallery[0].alt}
                    />
                </div>
                <div className="base-x-p base-y-p w-full grid grid-cols-12 md:gap-x-xl md:gap-y-5xl">
                    <div className="col-span-12 md:col-span-6">
                        <h2 className="text-display text-text pb-md md:mb-0 border-b border-text/20 md:border-0">
                            {project.title}, <span className="italic">{project.location}</span>
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-row items-center justify-between mt-lg mb-2xl md:my-0 border-b border-text/20 pb-lg md:border-b-0">
                        <div className="md:flex flex-row grid grid-cols-2 gap-y-lg items-start md:items-end">
                            {project.objectInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-xs pr-xl border-r-0 md:border-r border-text/20 mr-xl last:border-none last:mr-0"
                                >
                                    <p className="text-label text-text-muted">{item.title}</p>
                                    <p className="text-body">{item.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="hidden md:block">
                            <PrimaryButton
                                label="VISA ALLA BILDER"
                                type="button"
                                onClick={() => setIsGalleryOpen(true)}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:hidden flex flex-col gap-2xl">
                        {project.textBlocks.map((block, index) => (
                            <div key={index} className="flex flex-col gap-lg">
                                <h3 className="text-h3 text-text mb-sm">{block.title}</h3>
                                <div className="relative aspect-3/2 w-full overflow-hidden">
                                    <Image
                                        src={project.images.gallery[index + 1].src}
                                        alt={project.images.gallery[index + 1].alt}
                                        fill
                                        sizes={imageSizes.fullWidth}
                                        className="object-cover"
                                    />
                                </div>

                                <p className="text-body">{block.text}</p>
                            </div>
                        ))}
                        <PrimaryButton
                            label="VISA ALLA BILDER"
                            type="button"
                            onClick={() => setIsGalleryOpen(true)}
                        />
                    </div>
                    <div className="hidden md:block col-span-12 md:col-span-6">
                        <div className="relative aspect-3/2 w-full overflow-hidden">
                            <Image
                                src={project.images.gallery[1].src}
                                alt={project.images.gallery[1].alt}
                                fill
                                sizes={imageSizes.halfWidth}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="hidden md:block col-span-12 md:col-span-6">
                        <h3 className="text-h2 text-text mb-md">{project.textBlocks[0].title}</h3>
                        <p className="mb-xl text-body">{project.textBlocks[0].text}</p>
                        <h3 className="text-h2 text-text mb-md">{project.textBlocks[1].title}</h3>
                        <p className="mb-xl text-body">{project.textBlocks[1].text}</p>
                    </div>
                </div>
            </section>

            <Gallery
                isGalleryOpen={isGalleryOpen}
                project={project}
                onClick={() => setIsGalleryOpen(false)}
            />
        </>
    );
}
