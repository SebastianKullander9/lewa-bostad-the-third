import Image from "next/image";
import logo from "@/public/logo/logo_white.png";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";

export default function Footer() {
    return (
        <footer className="section-primary base-x-p pt-xl grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 base-y-p">
                <div className="mb-xl">
                    <h2 className="text-h1 mb-0 text-surface">Din bostadsresa börjar här.</h2>
                    <h2 className="text-h1 text-surface">Med ett hej.</h2>
                </div>
                <p className="text-body text-surface">
                    Varmt välkommen att kontakta oss, så hjälper vi dig vidare.
                </p>
                <div className="md:max-w-35">
                    <PrimaryButton label="Kontakta oss" type="button" />
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 base-y-p flex items-end justify-start md:justify-end">
                <Image src={logo} alt="" width={125} height={125} />
            </div>
            <div className="col-span-12 border-t border-surface/20 py-md flex items-center justify-between">
                <p className="text-small text-surface/50">
                    © {new Date().getFullYear()} Lewa Bostad
                </p>
                <Link
                    href="/integritetspolicy"
                    className="text-small text-surface/50 hover:text-surface transition-colors"
                >
                    Integritetspolicy
                </Link>
            </div>
        </footer>
    );
}
