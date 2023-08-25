import { useContext, useEffect } from "react"
import { ImageContext } from "../context/ImageContext.jsx"

function Gallery() {
    const context = useContext(ImageContext)

    const handlepage = (action) => {
        if (action === "plus") {
            context.setPage(context.page + 1)
        } else if (action === "minus") {
            context.setPage(context.page - 1)
        }
        context.getImage()
    }

    useEffect(() => {
        context.getImage()
    })

    return (
        <>
            <div className="text-center text-indigo-900 font-semibold text-3xl mt-6">{context.keyword} Pictures</div>
            <div className="flex justify-center mt-2 mx-16 flex-wrap">
                {context.images.map((item, index) => {
                    return (
                        <div key={index} className="w-64 m-4 h-44 rounded-lg flex justify-center items-center overflow-hidden relative" >
                            <img src={item.src.medium} className="min-w-full min-h-full rounded-lg hover:scale-110 duration-500" />
                            <div className="absolute w-full h-10 bottom-0 bg-gradient-to-t from-black" >
                                <h1 className="text-white absolute right-1 bottom-1 hover:underline hover:font-semibold"><i className="fa-solid fa-camera mr-2"></i><a href={item.photographer_url} className="cursor-pointer" target="_blank" rel="noreferrer">{item.photographer}</a></h1>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center items-center space-x-8 my-4">
                {context.page > 1 ?
                    <div className="bg-indigo-900 text-white p-2 rounded-lg cursor-pointer active:scale-95"
                        onClick={() => handlepage("minus")}>
                        <i className="fa-solid fa-caret-left mr-2"></i>Prev
                    </div> : null}

                <h1 className="font-semibold text-xl">{context.page}</h1>
                {context.images.length === 24 ?
                    <div className="bg-indigo-900 text-white p-2 rounded-lg cursor-pointer active:scale-95"
                        onClick={() => handlepage("plus")}>
                        Next<i className="fa-solid fa-caret-right ml-2"></i>
                    </div> : null}

            </div>

        </>
    )
}
export default Gallery