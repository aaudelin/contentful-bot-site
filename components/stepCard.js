
export default function StepCard({step, title, children}) {
    return (
        <div className="lg:w-96 mt-5 mx-4 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <div className="flex flex-row mb-2">
                <div className="h-10 w-10 p-2 rounded-full text-rose-700 bg-red-50">{step}</div>
                <h5 className="text-left m-auto ml-4 text-2xl font-bold tracking-tight text-rose-700">
                    {title}
                </h5>
            </div>
            <p className="text-left font-normal text-slate-800">
                {children}
            </p>
        </div>
    );
}