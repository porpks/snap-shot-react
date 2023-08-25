import { createContext, useState } from "react";
import axios from "axios";

export const ImageContext = createContext()

function ImageContextProvider(props) {
    const [keyword, setKeyword] = useState("Mountain")
    // const [color, setColor] = useState("")
    const [images, setImages] = useState([])


    return (
        <ImageContext.Provider value={{ keyword, setKeyword, images, setImages }}>
            {props.children}
        </ImageContext.Provider>
    )
}
export default ImageContextProvider