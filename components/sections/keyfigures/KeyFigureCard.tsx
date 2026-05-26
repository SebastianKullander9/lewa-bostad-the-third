interface KeyFigureCardProps {
    value: string;
    suffix: string;
    label: string;
}

export default function KeyFigureCard({ value, suffix, label }: KeyFigureCardProps) {
    return (
        <div className="pr-lg">
            <h2 className="font-thin text-6xl">
                {value}
                <span className="text-h3 ml-xs text-surface/50">{suffix}</span>
            </h2>
            <p className="text-small text-surface/50 mt-sm">{label}</p>
        </div>
    );
}
