import { keyfigureData } from "./data";
import KeyFigureCard from "./KeyFigureCard";

export default function KeyFigures() {
    return (
        <section className="bg-primary text-surface">
            <div className="grid grid-cols-12 base-x-p base-y-p gap-y-4xl md:gap-y-5xl">
                {/* Top row — label + intro */}
                <div className="col-span-12">
                    <p className="text-small text-surface/70">Våra nyckeltal</p>
                    <p className="text-lead max-w-prose">
                        Vi är ett nytt bostadsföretag med etablerad grund. Koncernens nyckeltal
                        bygger på historik från de två bolag som nu bildar Lewa Bostad.
                    </p>
                </div>

                <div className="col-span-12 border-t border-surface/20" />

                <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-2xl">
                    {keyfigureData.map((item, index) => (
                        <KeyFigureCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
