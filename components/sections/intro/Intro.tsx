import Image from "next/image";
import intro from "@/public/intro/Glansbaggen_Övre_hall_001.webp";

export default function Intro() {
    return (
        <section className="md:min-h-[40vh] lg:min-h-[55vh] xl:min-h-[70vh] base-x-p base-y-p grid grid-cols-12 items-start md:gap-x-2xl">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center md:h-full">
                <h2 className="text-h1">Omtanke i kvadrat.</h2>
                <p className="max-w-prose text-body">
                    Ett hem är så mycket mer än det som ryms inom fyra väggar. Hemkänsla handlar
                    också om grannar som samlas vid grillen och barn som leker tryggt mellan husen.
                </p>
                <p className="max-w-prose text-body">
                    Lewa Bostad bygger arkitektritade radhus och parhus med omsorgsfull design. Men
                    framförallt skapar vi trivsamma kvarter där livet får ta plats – både innanför
                    tröskeln och utanför dörren.
                </p>
            </div>
            <div className="col-span-12 md:col-span-6 aspect-4/3 md:aspect-auto md:h-full relative">
                <Image src={intro} alt="" fill className="object-cover" />
            </div>
        </section>
    );
}
