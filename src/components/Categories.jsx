import { useContext } from "react"
import { ImageContext } from "../context/ImageContext.jsx"

function Categories() {
    const categoriesList = ["Mountain", "Ocean", "Nature", "Food"]
    const colorList = ["red", "green", "blue", "yellow"]

    const context = useContext(ImageContext)

    const handleKeyword = (keyword) => {
        context.setKeyword(keyword)
        context.getImage()
    }
    const handleColor = (color) => {
        context.setColor(color)
        context.getImage()
    }

    return (
        <>
            <div className="flex justify-center mt-8">
                {categoriesList.map((item, index) => {
                    return (
                        <button key={index} className="bg-indigo-900 text-white px-4 py-1 mx-4 rounded-lg hover:font-semibold hover:ring active:text-slate-400 active:scale-95"
                            onClick={() => handleKeyword(item)}>
                            {item}
                        </button>
                    )
                })}
            </div>

            <div className="flex flex-col items-center mt-4">
                <h1>what color you like:</h1>
                <div className="flex justify-center mt-2">
                    {colorList.map((item, index) => {
                        return (
                            <button key={index} className={`text-${item} px-3 mx-4 rounded-lg hover:font-semibold hover:underline active:text-slate-400 active:scale-95`}
                                onClick={() => handleColor(item)}>
                                {item}
                            </button>
                        )
                    })}
                    <div className="bg-slate-300 px-3 mx-4 rounded-lg hover:font-semibold active:text-slate-400 active:scale-95 cursor-pointer"
                        onClick={() => handleColor("")}>
                        reset
                    </div>

                </div>
            </div>
        </>
    )
}
export default Categories