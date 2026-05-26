import Form from "./Form";

export default function InterestFormGeneral() {
    return (
        <section className="section-surface2 base-x-p base-y-p grid grid-cols-12 md:gap-y-0">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-between md:gap-0">
                <div>
                    <p className="text-label">Intresseanmälan</p>
                    <h2 className="text-display text-text mb-md md:mb-0">Ditt nästa hem väntar</h2>
                </div>
                <p className="hidden md:block text-body max-w-[40ch]">
                    Vi håller dig uppdaterad om nya projekt, kommande visningar och nyheter från
                    Lewa Bostad.
                </p>
            </div>
            <div className="col-span-12 md:col-span-6">
                <Form />
            </div>
        </section>
    );
}
