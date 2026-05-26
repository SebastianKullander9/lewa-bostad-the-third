import { IconCheckFillDuo18 } from "nucleo-ui-fill-duo-18";

export default function GdprInput() {
    return (
        <label className="flex flex-row items-center gap-sm cursor-pointer">
            <input type="checkbox" name="gdpr" required className="peer sr-only" />
            <div className="w-3 md:w-4 h-3 md:h-4 border flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary">
                <IconCheckFillDuo18 className="text-surface" />
            </div>
            <p className="text-small text-text">
                <span className="md:hidden">Jag godkänner integritetspolicyn.</span>
                <span className="hidden md:inline">
                    Genom att skicka in formuläret godkänner du vår integritetspolicy.
                </span>
            </p>
        </label>
    );
}
