import { useContext, useEffect, useState } from "react"
import { ImageContext } from "../context/ImageContext.jsx"

function Gallery() {
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [isShow, setIsShow] = useState(false)
    const context = useContext(ImageContext)

    const handlepage = (action) => {
        if (action === "plus") {
            context.setPage(context.page + 1)
        } else if (action === "minus") {
            context.setPage(context.page - 1)
        }
        context.getImage()
    }

    const handleShowImage = (src, url, name) => {
        setImage(src)
        setUrl(url)
        setName(name)
        setIsShow(true)
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
                        <div key={index} className="w-64 m-4 h-44 rounded-lg flex justify-center items-center overflow-hidden relative"
                            onClick={() => handleShowImage(item.src.large, item.photographer_url, item.photographer)}>
                            <img src={item.src.medium} className="min-w-full min-h-full rounded-lg hover:scale-110 duration-500" />
                            <div className="absolute w-full h-10 bottom-0 bg-gradient-to-t from-black" >
                                <h1 className="text-white absolute right-1 bottom-1 hover:underline hover:font-semibold">
                                    <i className="fa-solid fa-camera mr-2"></i>
                                    <a href={item.photographer_url} className="cursor-pointer" target="_blank" rel="noreferrer">
                                        {item.photographer}
                                    </a>
                                </h1>
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
            {isShow ? <div className="bg-[rgba(0,0,0,0.8)] bg-t w-full h-[100vh] fixed top-0 flex justify-center items-center">
                <div className="max-w-[80%] max-h-[80%] relative">
                    <img src={image} className="max-w-full max-h-[80vh]" />
                    <div className="absolute -top-10 -right-12 text-3xl text-white border-4 px-2 rounded-full border-white hover:text-indigo-900 hover:border-indigo-900 cursor-pointer active:text-indigo-600 active:border-indigo-600"
                        onClick={() => setIsShow(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <a href={url} target="_blank" rel="noreferrer"
                        className="absolute right-0 text-white font-semibold hover:underline drop-shadow-2xl">
                        <i className="fa-solid fa-camera mr-2"></i>
                        {name}
                    </a>
                </div>
            </div> : null}
        </>
    )
}
export default Gallery