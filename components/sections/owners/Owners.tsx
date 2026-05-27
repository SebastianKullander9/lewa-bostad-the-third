import Image from "next/image";
import owners from "@/public/owners/owners.jpg";

export default function Owners() {
    return (
        <section className="section-surface2 grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center base-x-p base-y-p order-2 md:order-1">
                <h2 className="text-quote">
                    &quot;Lewa Bostad skapar hem att trivas i – designade för vardagens små stunder
                    och framtidens stora ögonblick.&quot;
                </h2>
                <p className="text-lead">Johan Bondebjer och Magnus Ekvall</p>
            </div>
            <div className="col-span-12 md:col-span-6 relative aspect-square order-1 md:order-2">
                <Image src={owners} alt="" fill className="object-cover" />
            </div>
        </section>
    );
}
