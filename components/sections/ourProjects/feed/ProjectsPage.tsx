import { projectData } from "../data";
import ProjectThumbnail from "./ProjectThumbnail";

export default function ProjectsPage() {
    return (
        <section className="section-surface min-h-section mt-(--header-height) base-x-p pb-2xl md:py-4xl grid grid-cols-12 gap-y-lg md:gap-xl">
            <div className="col-span-12 flex flex-col">
                <h2 className="text-h1 text-text">Hitta hem hos oss.</h2>
                <p className="text-body max-w-prose">
                    Lewa Bostad bygger radhus och parhus i bostadsrättsform. Husen utformas med
                    fokus på hållbar arkitektur, genomtänkt design och hög kvalitet i varje detalj.
                </p>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-y-xl md:gap-x-lg md:gap-y-3xl">
                {projectData.map((project, index) => (
                    <ProjectThumbnail
                        key={project.slug}
                        project={project}
                        index={index}
                    ></ProjectThumbnail>
                ))}
            </div>
        </section>
    );
}
