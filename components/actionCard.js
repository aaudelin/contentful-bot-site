export default function ActionCard({startImage, endImage, startTool, endTool, title, description}) {
    return (
        <div className="flex flex-row mt-5 mx-4 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <div className="my-auto flex flex-col md:flex-row">
                <img className="rounded-full w-8 h-8" src={startImage?.url} alt={startTool}/>
                <img className="md:ml-4 rounded-full w-8 h-8" src={endImage?.url} alt={endTool}/>
            </div>
            <div className="flex flex-col mb-2 ml-2 sm:ml-10">
                <div className="text-left text-sm sm:text-xl font-bold tracking-tight text-rose-700">
                    {title}
                </div>
                <div className="text-left mt-2 text-xs sm:text-sm font-bold tracking-tight text-slate-800">
                    {startTool} - {endTool} powered by Contenful Bot
                </div>
            </div>
        </div>
    );
}