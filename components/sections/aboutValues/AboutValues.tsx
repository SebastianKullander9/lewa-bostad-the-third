import { aboutValuesData } from "./data";

export default function AboutValues() {
    return (
        <section className="bg-primary text-surface base-x-p base-y-p grid grid-cols-12 sm:gap-y-3xl 2xl:gap-y-0">
            <div className="col-span-12 2xl:col-span-3 flex items-center">
                <h2 className="text-h1 text-surface mb-xl">Tre byggstenar som skapar vår grund.</h2>
            </div>
            <div className="col-span-12 2xl:col-span-6 2xl:col-start-7 flex flex-col sm:flex-row gap-x-3xl">
                {aboutValuesData.map((item, index) => (
                    <div key={index} className="">
                        {" "}
                        <p className="text-category text-surface">{item.title}</p>
                        <p className="text-body text-surface">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/*
<h2 className="text-display max-w-[20ch]">Tre byggstenar som skapar vår grund.</h2>
<div className="flex flex-col gap-xl md:gap-4xl">
    <div className="w-full border-t border-surface/20" />
    <div className="grid grid-cols-12 gap-xl md:gap-x-4xl">
        {aboutValuesData.map((item, index) => (
            <div key={index} className="col-span-12 lg:col-span-4 flex flex-col gap-md">
                <p className="text-label text-surface/60">{item.title}</p>
                <p className="text-body text-surface">{item.text}</p>
            </div>
        ))}
    </div>
</div>
*/
