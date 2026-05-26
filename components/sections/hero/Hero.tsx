import Image from "next/image";
import hero from "@/public/hero/hero.webp";
import { imageSizes } from "@/app/lib/imageSizes";

export default function Hero() {
    return (
        <section className="h-screen w-full relative">
            <Image
                src={hero}
                alt="hero image, showing a living room from one of lewas estate projects"
                fill
                sizes={imageSizes.fullWidth}
                priority
                fetchPriority="high"
                className="object-cover"
            />
        </section>
    );
}
