import { createContext, useState } from "react";
import axios from "axios";

export const ImageContext = createContext()

function ImageContextProvider(props) {
    const [keyword, setKeyword] = useState("Mountain")
    // const [color, setColor] = useState("")
    const [images, setImages] = useState([])

    const getImage = async () => {
        const params = {
            query: keyword,
            per_page: 20,
        }
        const result = await axios.get(`https://api.pexels.com/v1/search`, { headers: { Authorization: 'KUZ25Iu4lWwSu2SHbcpvpVPpXrwKibLr9GRsKwKNKOjb52QPgZvQreJS' }, params })
        setImages(result.data.photos)
    }

    return (
        <ImageContext.Provider value={{ keyword, setKeyword, images, setImages, getImage }}>
            {props.children}
        </ImageContext.Provider>
    )
}
export default ImageContextProvider