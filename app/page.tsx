import Hero from "@/components/sections/hero/Hero";
import Intro from "@/components/sections/intro/Intro";
import ProjectCTA from "@/components/sections/projectCTA/ProjectCTA";
import AboutCTA from "@/components/sections/aboutCTA/AboutCTA";
import KeyFigures from "@/components/sections/keyfigures/Keyfigures";
import Contact from "@/components/sections/contact/Contact";
import InterestFormGeneral from "@/components/sections/interestFormGeneral/InterestFormGeneral";

export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <ProjectCTA />
            <AboutCTA />
            <KeyFigures />
            <Contact />
            <InterestFormGeneral />
        </>
    );
}
