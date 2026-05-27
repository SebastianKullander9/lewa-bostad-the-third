import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

export default function AboutCTA() {
    return (
        <section
            className="section-surface base-x-p base-y-p grid grid-cols-12"
            aria-label="Call to action för om oss"
        >
            <div className="col-span-12 md:col-span-6 flex flex-col items-start md:justify-center relative order-2 md:order-1">
                <h2 className="text-h1 text-text  md:mb-3xl">
                    Bra blir ännu bättre. <br />
                    Tillsammans.
                </h2>
                <p className="max-w-prose text-body mb-md md:mb-xl">
                    Två bostadsaktörer med lång erfarenhet har gått samman och bildat Lewa Bostad.
                    Företaget drivs av Johan Bondebjer och Magnus Ekvall från tidigare Bjerbo Bostad
                    samt Fredrik Lidjan från Reliwe. Med en stark projektportfölj och god finansiell
                    ställning fortsätter vi att skapa hållbara hem och värde för både kunder och
                    samhälle.
                </p>
                <div className="min-w-35 hidden md:block">
                    <PrimaryButton type="button" label="Om oss" />
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col relative order-2 md:order-1 items-end justify-between divide-y divide-border">
                <div className="max-w-prose py-lg">
                    <p className="text-category mb-md" style={{ fontFamily: "var(--font-body)" }}>
                        TRYGGHET
                    </p>
                    <p className="text-body">
                        Att köpa hus är ett av livets största beslut. För oss är det viktigt att du
                        känner dig trygg ivarje steg. Därför finns vi med hela vägen – från dröm
                        till planering, inflytt och längre än så.
                    </p>
                </div>
                <div className="max-w-prose py-lg">
                    <p className="text-category mb-md" style={{ fontFamily: "var(--font-body)" }}>
                        DESIGN
                    </p>
                    <p className="text-body">
                        Våra bostäder förenklar och förgyller vardagen. Med omsorgsfull arkitektur,
                        genomtänkta planlösningar och noggrant utvalda material skapar vi hem som
                        får människor att tänka: Här vill jag bo!
                    </p>
                </div>
                <div className="max-w-prose py-lg">
                    <p className="text-category mb-md" style={{ fontFamily: "var(--font-body)" }}>
                        PASSION
                    </p>
                    <p className="text-body">
                        Vi tycker om det vi gör och bygger med hjärtat. Det märks i detaljerna och
                        helheten, men också i hur vi bemöter varandra och våra kunder.
                    </p>
                </div>
            </div>
        </section>
    );
}
