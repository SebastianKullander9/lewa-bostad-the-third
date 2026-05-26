import InterestFormUnderpage from "@/components/sections/interestFormUnderpage/InteresetFormUnderpage";
import { projectData } from "@/components/sections/ourProjects/data";
import ProjectUnderpage from "@/components/sections/ourProjects/underpage/ProjectUnderpage";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const project = projectData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <>
            <ProjectUnderpage project={project} />
            <InterestFormUnderpage project={project} />
        </>
    );
}

export function generateStaticParams() {
    return projectData.map((project) => ({
        slug: project.slug,
    }));
}
