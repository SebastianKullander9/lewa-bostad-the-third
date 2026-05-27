import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import ProjectCard from "./ProjectCard";
import { projectCTAData } from "./data";
import Link from "next/link";

interface ProjectCTAProps {
    background?: "section-surface" | "section-surface2";
}

export default function ProjectCTA({ background = "section-surface2" }: ProjectCTAProps) {
    return (
        <section className={`${background} w-full`}>
            <div className="base-x-p py-lg md:py-3xl w-full grid grid-cols-12 md:gap-x-md">
                <div className="col-span-12 flex flex-col">
                    <h2 className="text-h1 text-text">Hitta hem hos oss.</h2>
                    <div className="flex flex-row justify-between items-end">
                        <p className="max-w-prose text-body">
                            Lewa Bostad bygger radhus och parhus i bostadsrättsform. Husen utformas
                            med fokus på hållbar arkitektur, genomtänkt design och hög kvalitet i
                            varje detalj.
                        </p>
                        <div className="max-w-35 hidden md:block mb-md">
                            <PrimaryButton label="Alla projekt" type="button" />
                        </div>
                    </div>
                </div>
                {projectCTAData.map((item, index) => (
                    <Link
                        href="/vara-projekt"
                        key={index}
                        className="col-span-12 md:col-span-6 relative mb-lg md:mb-0"
                    >
                        <ProjectCard
                            title={item.title}
                            location={item.location}
                            status={item.status}
                            image={item.image}
                        />
                    </Link>
                ))}
                <div className="col-span-12 md:hidden">
                    <PrimaryButton label="Alla projekt" type="button" />
                </div>
            </div>
        </section>
    );
}
