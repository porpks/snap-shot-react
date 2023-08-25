
function Categories() {
    return (
        <>
            <div className="flex justify-center mt-8">
                <button className="bg-indigo-900 text-white px-4 py-1 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                >Mountain</button>
                <button className="bg-indigo-900 text-white px-4 py-1 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                >Ocean</button>
                <button className="bg-indigo-900 text-white px-4 py-1 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                >Nature</button>
                <button className="bg-indigo-900 text-white px-4 py-1 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                >Food</button>
            </div>
            <div className="flex flex-col items-center mt-4">
                <h1>what color you like:</h1>
                <div className="flex justify-center mt-2">
                    <button className="bg-red-600 text-white px-3 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                    >Red</button>
                    <button className="bg-green-600 text-white px-3 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                    >Green</button>
                    <button className="bg-blue-600 text-white px-3 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                    >Blue</button>
                    <button className="bg-yellow-500 text-white px-3 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                    >Yellow</button>
                </div>
            </div>
        </>
    )
}
export default Categories