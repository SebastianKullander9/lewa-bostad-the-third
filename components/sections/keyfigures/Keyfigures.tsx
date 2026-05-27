import { keyfigureData } from "./data";
import KeyFigureCard from "./KeyFigureCard";

export default function KeyFigures() {
    return (
        <section className="bg-primary text-surface">
            <div className="base-x-p base-y-p w-full grid grid-cols-12 gap-y-3xl">
                <div className="col-span-12 md:col-span-4 flex flex-col text-center md:text-start">
                    <h2 className="text-h1 text-surface">Etablerad erfarenhet.</h2>
                    <p className="text-body text-surface">
                        Vi är ett nytt bostadsföretag med etablerad grund. Kencernens nyckeltal
                        bygger på historik från de två bolag som nu bildar Lewa Bostad.
                    </p>
                </div>
                <div className="col-span-12 lg:col-start-6 xl:col-start-7 grid grid-cols-2 md:grid-cols-4 items-center md:divide-x md:divide-surface/20">
                    {keyfigureData.map((item, index) => (
                        <KeyFigureCard key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
