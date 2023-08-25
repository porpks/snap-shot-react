import { createContext, useState } from "react";
import axios from "axios";

export const ImageContext = createContext()

function ImageContextProvider(props) {
    const [keyword, setKeyword] = useState("Mountain")
    const [color, setColor] = useState("")
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)

    const getImage = async () => {
        let params = {
            query: keyword,
            per_page: 24,
            page: page
        }
        if (color) {
            params = {
                ...params,
                color: color
            }
        }

        const result = await axios.get(`https://api.pexels.com/v1/search`, { headers: { Authorization: 'KUZ25Iu4lWwSu2SHbcpvpVPpXrwKibLr9GRsKwKNKOjb52QPgZvQreJS' }, params })
        setImages(result.data.photos)
    }

    return (
        <ImageContext.Provider value={{
            keyword, setKeyword, color, setColor, images, setImages, page, setPage, getImage
        }}>
            {props.children}
        </ImageContext.Provider>
    )
}
export default ImageContextProvider