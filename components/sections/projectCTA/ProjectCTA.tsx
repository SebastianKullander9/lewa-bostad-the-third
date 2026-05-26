import ProjectCard from "./ProjectCard";
import { projectCTAData } from "./data";
import Link from "next/link";

interface ProjectCTAProps {
    background?: "section-surface" | "section-surface2";
}
/*
TODO: 
- Add link to article
- Add hover effects to article
- Handle images correcly (fill, sizes) etc
- WCAG for links
*/

export default function ProjectCTA({ background = "section-surface2" }: ProjectCTAProps) {
    return (
        <section className={`${background} w-full`}>
            <div className="base-x-p py-lg md:py-3xl w-full grid grid-cols-12 gap-lg md:gap-xs">
                <div className="col-span-12">
                    <h2 className="text-display text-text md:mb-2xl">Våra projekt</h2>
                </div>
                {projectCTAData.map((item, index) => (
                    <Link
                        href="/vara-projekt"
                        key={index}
                        className="col-span-12 md:col-span-6 relative"
                    >
                        <ProjectCard
                            title={item.title}
                            location={item.location}
                            status={item.status}
                            image={item.image}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
