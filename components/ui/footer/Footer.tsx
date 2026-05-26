import Image from "next/image";
import logo from "@/public/logo/logo_white.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary text-surface base-x-p">
            <div className="grid grid-cols-12 py-3xl border-b border-surface/10">
                <div className="col-span-6 flex flex-col gap-sm">
                    <Link
                        href="/projekt"
                        className="text-small hover:opacity-60 transition-opacity"
                    >
                        Våra projekt
                    </Link>
                    <Link href="/om-oss" className="text-small hover:opacity-60 transition-opacity">
                        Om oss
                    </Link>
                </div>
                <div className="col-span-6 flex flex-col gap-sm items-end">
                    <a
                        href="mailto:xxx@lewabostad.se"
                        className="text-small hover:opacity-60 transition-opacity"
                    >
                        xxx@lewabostad.se
                    </a>
                    <a
                        href="tel:08000000"
                        className="text-small hover:opacity-60 transition-opacity"
                    >
                        08-XXX XX XX
                    </a>
                </div>
            </div>

            <p className="text-[12vw] text-surface/15 font-heading font-light leading-none uppercase tracking-tight pt-6xl">
                Lewa Bostad
            </p>

            <div className="flex flex-row justify-between py-lg border-t border-surface/10">
                <p className="text-small text-surface">© 2025 Lewa Bostad</p>
                <Link
                    href="/integritetspolicy"
                    className="text-small text-surface hover:opacity-60 transition-opacity"
                >
                    Integritetspolicy
                </Link>
            </div>
        </footer>
    );
}
