import AboutHero from "@/components/sections/aboutHero/AboutHero";
import AboutQA from "@/components/sections/aboutQA/AboutQA";
import AboutValues from "@/components/sections/aboutValues/AboutValues";
import Contact from "@/components/sections/contact/Contact";
import ProjectCTA from "@/components/sections/projectCTA/ProjectCTA";

export default function Page() {
    return (
        <>
            <AboutHero />
            <AboutQA />
            <ProjectCTA background="section-surface" />
            <AboutValues />
            <Contact />
        </>
    );
}
