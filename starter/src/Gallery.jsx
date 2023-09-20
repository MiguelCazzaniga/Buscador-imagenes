import axios from "axios"
import { useGlobalContext } from "./Context"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"



const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&query=`

const Gallery = () => {
  const {palabra} = useGlobalContext()
  
  const response = useQuery({
    queryKey: ["images",palabra],
    queryFn: async () => {
      const result = await axios.get(url+palabra)     
      return result.data
    }
  })
  if (response.isLoading){
    return (
      <div className="loading">
        
      </div>
    )
  }
  if (response.isError){
    return(
      toast.error("There was an Error")
    )
  }

  const results=response.data.results

  if (results.length<1){
    return(
          toast.error("Not matches found")
        
    )
  }
  return (
    <div className="imageContainer">
      {results.map((item) => {
        const url = item?.urls?.small
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          ></img>
        )
      })}
    </div>
  )
}
export default Gallery
