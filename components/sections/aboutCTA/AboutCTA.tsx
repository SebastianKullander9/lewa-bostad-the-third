import Image from "next/image";
import ctaAbout from "@/public/aboutCTA/aboutCTA.webp";
import Link from "next/link";
import { IconChevronRightFillDuo18 } from "nucleo-ui-fill-duo-18";
import { imageSizes } from "@/app/lib/imageSizes";

export default function AboutCTA() {
    return (
        <section
            className="section-surface base-x-p base-y-p grid grid-cols-12"
            aria-label="Call to action för om oss"
        >
            <div className="col-span-12">
                <p className="text-small text-text-muted">Om oss</p>
                {/* TODO: Ask client to provide a text they want here, preferably matching length */}
                <h2 className="text-display text-text mb-md md:mb-0">
                    Bra blir ännu bättre. <br />
                    Tillsammans.
                </h2>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col items-start md:justify-center relative order-2 md:order-1">
                <p className="max-w-prose text-lead mb-md md:mb-0">
                    Två bostadsaktörer med lång erfarenhet har gått samman och bildat Lewa Bostad.
                    Företaget drivs av Johan Bondebjer och Magnus Ekvall från tidigare Bjerbo Bostad
                    samt Fredrik Lidjan från Reliwe. Med en stark projektportfölj och god finansiell
                    ställning fortsätter vi att skapa hållbara hem och värde för både kunder och
                    samhälle.
                </p>
                <div className="md:absolute md:bottom-0 md:left-0">
                    <Link
                        href="/om-oss"
                        className="text-small flex flex-row items-center gap-xs group"
                    >
                        <span className="group-hover:underline underline-offset-2">
                            LÄR KÄNNA OSS
                        </span>
                        <IconChevronRightFillDuo18
                            size={12}
                            className="mb-0.5 scale-85 md:scale-100"
                        />
                    </Link>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative order-1 md:order-2">
                <Link href="/om-oss" className="group cursor-default">
                    <div className="relative aspect-3/2 w-full overflow-hidden mb-md md:mb-0">
                        <Image
                            src={ctaAbout}
                            alt="Kök från projektet Kummelnäshöjden"
                            fill
                            sizes={imageSizes.halfWidth}
                            className="object-cover transition-transform duration-650 group-hover:scale-[1.02]"
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
}
