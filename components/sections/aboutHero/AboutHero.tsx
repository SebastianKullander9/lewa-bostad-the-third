import Image from "next/image";
import owners from "@/public/aboutHero/owners.jpg";
import { imageSizes } from "@/app/lib/imageSizes";

export default function AboutHero() {
    return (
        <section className="h-auto md:h-[calc(100vh-var(--header-height))] mt-(--header-height) grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 flex items-center justify-center order-2 md:order-1">
                <div className="flex flex-col gap-md md:gap-lg base-x-p base-y-p">
                    <h1 className="text-h1 text-text">
                        På väg mot något nytt.
                        <br />
                        Precis som du.
                    </h1>
                    <p className="max-w-prose text-body">
                        Två bostadsaktörer med lång erfarenhet har gått samman och bildat Lewa
                        Bostad. Företaget drivs av Johan Bondebjer, Magnus Ekvall från tidigare
                        Bjerbo Bostad samt Fredrik Lidjan från Reliwe. Med en stark projektportfölj
                        och god finansiell ställning fortsätter vi att skapa hållbara hem och värde
                        för både kunder och samhälle.
                    </p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative overflow-hidden order-1 md:order-2 h-[60vh] md:h-auto">
                <Image src={owners} alt="" className="object-cover" fill quality={90} />
            </div>
        </section>
    );
}
