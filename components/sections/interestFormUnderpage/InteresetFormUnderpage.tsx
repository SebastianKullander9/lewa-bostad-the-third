import Form from "./Form";
import { Project } from "../ourProjects/data";
import ContactDetails from "@/components/ui/contactDetails/ContactDetails";

interface InterestFormUnderpageProps {
    project: Project;
}

export default function InterestFormUnderpage({ project }: InterestFormUnderpageProps) {
    return (
        <section className="section-surface2 base-x-p py-sm sm:py-sm md:py-sm lg:py-md xl:py-md grid grid-cols-12 md:gap-y-0">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-between gap-2xl md:gap-0">
                <div>
                    <p className="text-h1 mb-md">Intresseanmälan</p>
                    <h2 className="text-body text-text">{project.title} väntar på dig.</h2>
                </div>
                <div className="hidden md:block">
                    <ContactDetails />
                </div>
            </div>
            <div className="col-span-12 md:col-span-6">
                <Form />
            </div>
        </section>
    );
}
