import { useState, useContext } from "react"
import { ImageContext } from "../context/ImageContext.jsx"
import axios from "axios"

function Searchbar() {
    const context = useContext(ImageContext)
    const [input, setInput] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const params = {
            query: "food",
            per_page: 20,
        }
        const result = await axios.get(`https://api.pexels.com/v1/search`, { headers: { Authorization: 'KUZ25Iu4lWwSu2SHbcpvpVPpXrwKibLr9GRsKwKNKOjb52QPgZvQreJS' }, params })
        context.setImages(result.data.photos)
        console.log(input);
    }

    return (
        <>
            <div className="flex w-full justify-center mt-8">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input placeholder="Search..." className="w-96 p-2 border rounded-l-lg focus:outline-none focus:border-black"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button className="bg-indigo-900 text-white p-2 px-4 rounded-r-lg hover:brightness-125" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </>
    )
}
export default Searchbar