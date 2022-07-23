import ContentfulText from "./contentfulText";
import ActionCard from "./actionCard";

export default function ExampleActions({allActions}) {
    return (
        <section
            className="text-slate-800 text-center flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h2 className="text-2xl md:text-4xl">
                Some <ContentfulText text="Zapier" /> or <ContentfulText text="Make" /> integration examples with <ContentfulText text="Contentful Bot" />
            </h2>
            <div className="flex flex-col flex-grow flex-wrap justify-around mt-5">

                {allActions.map(action => {
                    return (
                        <ActionCard
                            key={action.sys.id}
                            startImage={action.startImage}
                            endImage={action.endImage}
                            startTool={action.startTool}
                            endTool={action.endTool}
                            title={action.name}
                            description={action.description}
                        />
                    )
                })}
            </div>

            <div className="text-center tracking-tighter leading-tight md:pr-8 md:pl-8">
                <button
                    className="transition-colors ease-in-out duration-150 rounded-md mt-5 text-lg text-rose-700 border-2 border-red-50 px-4 py-2 bg-red-50 hover:text-rose-900 hover:bg-white hover:border-2 hover:border-red-100">
                    <a href="#subscribe">Start Now !</a>
                </button>
            </div>
        </section>
    )
}