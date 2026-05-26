import Image from "next/image";
import exteriorWood from "@/public/projects/kummelnashojden/Exterior_2_Wood_002.webp";
import { aboutQAData } from "./data";
import { imageSizes } from "@/app/lib/imageSizes";

export default function AboutQA() {
    return (
        <section className="section-surface2 grid grid-cols-12 base-x-p base-y-p">
            <div className="col-span-12 md:col-span-6 flex flex-col gap-2xl order-2 md:order-1">
                {aboutQAData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-md">
                        <h2 className="text-h3 font-normal text-text">{item.title}</h2>
                        <p className="text-body max-w-prose">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="col-span-12 md:col-span-6 relative aspect-3/2 mb-lg md:mb-0 order-1 md:order-2 ">
                <Image
                    src={exteriorWood}
                    alt="Exteriör av Kummelnäshöjden i trä"
                    fill
                    sizes={imageSizes.halfWidth}
                    className="object-cover"
                />
            </div>
        </section>
    );
}
