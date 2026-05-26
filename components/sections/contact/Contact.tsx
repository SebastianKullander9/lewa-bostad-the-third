import Image from "next/image";
import contactImage from "@/public/contact/contact.webp";
import ContactDetails from "@/components/ui/contactDetails/ContactDetails";
import { imageSizes } from "@/app/lib/imageSizes";

export default function Contact() {
    return (
        <section className="section-surface" aria-label="Kontakta Lewa Bostad">
            <div className="grid grid-cols-12 base-x-p base-y-p">
                <div className="col-span-12">
                    <p className="text-small text-text-muted">Kontakt</p>
                    <h2 className="text-display text-text mb-md md:mb-0">
                        Din bostadsresa börjar här.
                        <br />
                        Med ett hej.
                    </h2>
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col md:justify-center relative grid-grid-cols-4 order-2 md:order-1 gap-md md:gap-0">
                    <p className="text-lead">
                        Varmt välkommen att kontakta oss, så hjälper vi dig vidare.
                    </p>
                    <div className="md:absolute md:bottom-0 md:left-0">
                        <ContactDetails />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 relative order-1 md:order-2 mb-md md:mb-0">
                    <div className="relative aspect-3/2 w-full overflow-hidden">
                        <Image
                            src={contactImage}
                            alt="Vardagsrum från ett av Lewas projekt"
                            fill
                            sizes={imageSizes.halfWidth}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
