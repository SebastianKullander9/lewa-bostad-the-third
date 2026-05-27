import Image from "next/image";
import { aboutQAData } from "./data";

const backgroundColors = ["bg-surface", "bg-surface2"];

export default function AboutQA() {
    return (
        <div>
            {aboutQAData.map((item, index) => (
                <section
                    key={index}
                    className={`${backgroundColors[index % 2]} base-x-p base-y-p grid grid-cols-12 items-center`}
                >
                    <div
                        className={`col-span-12 md:col-span-6 max-w-prose ${item.orientation === "left" ? "order-1 md:pr-3xl" : "order-2 md:pl-3xl"}`}
                    >
                        <h2 className="text-h1">{item.title}</h2>
                        <p className="text-body">{item.text}</p>
                    </div>
                    <div
                        className={`col-span-12 md:col-span-6 ${item.orientation === "left" ? "order-1 md:order-2" : "order-2 md:order-1"}`}
                    >
                        <Image src={item.image} alt="" />
                    </div>
                </section>
            ))}
        </div>
    );
}
