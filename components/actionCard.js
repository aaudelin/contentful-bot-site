export default function ActionCard({startImage, endImage, startTool, endTool, title, description}) {
    return (
        <div className="flex flex-row mt-5 mx-4 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <div className="my-auto flex flex-row">
                <img className="rounded-full w-10 h-10" src={startImage?.url} alt={startTool}/>
                <img className="ml-4 rounded-full w-10 h-10" src={endImage?.url} alt={endTool}/>
            </div>
            <div className="flex flex-col mb-2 ml-10">
                <div className="text-left text-xl font-bold tracking-tight text-rose-700">
                    {title}
                </div>
                <div className="text-left mt-2 text-sm font-bold tracking-tight text-slate-800">
                    {startTool} - {endTool} powered by Contenful Bot
                </div>
            </div>
        </div>
    );
}