interface ContactDetailsProps {
    hideLabels?: boolean;
}

export default function ContactDetails({ hideLabels = false }: ContactDetailsProps) {
    return (
        <>
            <div className="flex flex-row items-center">
                <p
                    className={`${hideLabels ? "hidden" : "block"} text-small text-text-muted min-w-15 md:min-w-30`}
                >
                    Email
                </p>
                <a href="mailto:xxxx@lewabostad.se" className="text-lead link-hover-fade">
                    xxxx@lewabostad.se
                </a>
            </div>
            <div className="flex flex-row items-center">
                <p
                    className={`${hideLabels ? "hidden" : "block"} text-small text-text-muted min-w-15 md:min-w-30`}
                >
                    Telefon
                </p>
                <a href="tel:0800000" className="text-lead link-hover-fade">
                    08-XXX XX XX
                </a>
            </div>
        </>
    );
}
