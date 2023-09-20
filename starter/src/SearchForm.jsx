import { toast } from "react-toastify"
import { useGlobalContext } from "./Context"

const SearchForm = () => {
const {palabra,handleWord}=useGlobalContext()

  const HandleSubmit=(e)=>{
    e.preventDefault()
    const newWord = e.target.elements[0].value
     if (newWord){  
    return handleWord(newWord)
    }else{
    return (toast.info("Please enter a Subject for searching"))
    }

    
   
  }

  return (
    <div className="searchForm">
      <h1>Unsplash Images</h1>
      <form onSubmit={HandleSubmit}>
        <input type='text' placeholder={palabra} />

        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
export default SearchForm