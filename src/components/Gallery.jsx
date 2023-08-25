import { useContext, useEffect } from "react"
import { ImageContext } from "../context/ImageContext.jsx"

function Gallery() {
    const context = useContext(ImageContext)

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

                        </div >
                    )
                })}
            </div >

        </>
    )
}
export default Gallery