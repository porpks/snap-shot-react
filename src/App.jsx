import './App.css'
import Headline from './components/Headline'
import Searchbar from './components/Searchbar'
import Categories from './components/Categories'
import Gallery from './components/Gallery'
import ImageContextProvider from './context/ImageContext'

function App() {

  return (
    <ImageContextProvider>
      <Headline />
      <Searchbar />
      <Categories />
      <Gallery />
    </ImageContextProvider>
  )
}

export default App
