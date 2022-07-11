import StepCard from "./stepCard";
import ContentfulText from "./contentfulText";

export default function HowItWorks() {
    return (
        <section
            className="text-slate-800 text-center flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <h2 className="text-2xl md:text-4xl">
                Easily integrate your <span className="text-rose-700">Contentful</span> content with your favorite
                automation tool
            </h2>
            <div className="flex flex-row flex-wrap justify-around lg:flex-nowrap lg:justify-between mt-5">
                <StepCard step={1} title={"Connect your workspaces"}>
                    Use your <span className="text-rose-700">Contentful Bot</span> admin panel to add
                    any <ContentfulText/> workspace. Login using your <ContentfulText/> credentials
                </StepCard>
                <StepCard step={2} title={"Create an API Key"}>
                    Generate an API key using your <span className="text-rose-700">Contentful Bot</span> admin panel.
                    You can create multiple keys with different scopes and rights.
                </StepCard>
                <StepCard step={3} title={"Automate your content"}>
                    Go to your favourite automation tool like <ContentfulText text={"Zapier"} /> or <ContentfulText text={"Make"} /> and
                    register <ContentfulText text="Contentful Bot" /> App. Start automating your content !
                </StepCard>


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
