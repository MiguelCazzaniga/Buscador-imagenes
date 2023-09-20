import Gallery from "./Gallery"
import SearchForm from "./SearchForm"
import ThemeToggle from "./ThemeToggle"
import { AppProvider } from "./Context"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  
  return (
    <main>
      
      <ThemeToggle />
      <SearchForm />
      <Gallery />
      <ToastContainer position="top-center"/>
    </main>
  )
}
export default App
