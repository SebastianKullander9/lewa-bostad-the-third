interface KeyFigureCardProps {
    value: string;
    suffix: string;
    label: string;
    index: number;
}

export default function KeyFigureCard({ value, suffix, label, index }: KeyFigureCardProps) {
    return (
        <div
            className={`
                py-xl flex flex-col items-center
                ${index % 2 === 0 ? "border-r border-surface/15" : ""}
                ${index < 2 ? "border-b border-surface/15" : ""}
                md:border-b-0 md:border-r-0 md:border-l md:border-surface/15 md:first:border-l-0
            `}
        >
            <h2 className="font-thin text-keyfigure">
                {value}
                <span className="text-h3 ml-xs text-surface/50">{suffix}</span>
            </h2>
            <p className="text-small text-surface/50 mt-sm">{label}</p>
        </div>
    );
}
