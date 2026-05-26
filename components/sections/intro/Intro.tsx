// interface IntroProps {
//
// }

export default function Intro() {
    return (
        <section
            className="h-section w-full base-x-p base-y-p flex flex-col"
            aria-label="Introduktion till lewa bostad"
        >
            <div>
                <p className="text-label text-text-muted mb-xs">Omtanke i kvadrat</p>
                <p className="max-w-[35ch] text-body">
                    Lewa Bostad bygger arkitektritade radhus och parhus med omsorgsfull design. Men
                    framförallt skapar vi trivsamma kvarter där livet får ta plats – både innanför
                    tröskeln och utanför dörren.
                </p>
            </div>
            <div className="w-full flex flex-1 items-center justify-center">
                <h2 className="text-display text-text max-w-[33ch]">
                    Ett hem är så mycket mer än det som ryms inom fyra väggar. Hemkänsla handlar
                    också om grannar som samlas vid grillen och barn som leker tryggt mellan husen.
                </h2>
            </div>
        </section>
    );
}
