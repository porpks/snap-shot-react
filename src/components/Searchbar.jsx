
function Searchbar() {
    return (
        <>
            <div className="flex w-full justify-center mt-8">
                <form>
                    <input placeholder="Search..." className="w-96 p-2 border rounded-l-lg focus:outline-none focus:border-black" />
                    <button className="bg-indigo-900 text-white p-2 px-4 rounded-r-lg hover:brightness-125" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </>
    )
}
export default Searchbar