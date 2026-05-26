import Image from "next/image";
import interior from "@/public/projects/kummelnashojden/Interior_7_002.webp";
import { imageSizes } from "@/app/lib/imageSizes";

export default function AboutHero() {
    return (
        <section className="h-auto md:h-[calc(100vh-var(--header-height))] mt-(--header-height) grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 flex items-center justify-center order-2 md:order-1">
                <div className="flex flex-col gap-md md:gap-lg base-x-p base-y-p">
                    <h1 className="text-display text-text">
                        På väg mot något nytt.
                        <br />
                        Precis som du.
                    </h1>
                    <p className="max-w-prose text-lead">
                        Två bostadsaktörer med lång erfarenhet har gått samman och bildat Lewa
                        Bostad. Företaget drivs av Johan Bondebjer, Magnus Ekvall från tidigare
                        Bjerbo Bostad samt Fredrik Lidjan från Reliwe. Med en stark projektportfölj
                        och god finansiell ställning fortsätter vi att skapa hållbara hem och värde
                        för både kunder och samhälle.
                    </p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative overflow-hidden order-1 md:order-2 h-[60vh] md:h-auto">
                <Image
                    src={interior}
                    alt=""
                    className="object-cover"
                    fill
                    sizes={imageSizes.halfWidth}
                />
            </div>
        </section>
    );
}
