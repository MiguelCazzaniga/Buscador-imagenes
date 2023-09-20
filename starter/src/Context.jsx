import { createContext, useContext,useEffect,useState} from "react"


const AppContext = createContext()



  

  export const AppProvider = ({ children }) => {
    const [palabra,setPalabra]=useState("cat")
    const [daylight, setDaylight] = useState(true)
    
    
    
    

    const handleWord=(newWord)=>{
      setPalabra(newWord)
    }
    
    const handleDaylight=()=>{
      const newDaylight=daylight
      const fondo=document.querySelector("main")
      const boton = document.getElementById("ThemeButton")
      if (newDaylight){
        fondo.setAttribute("style","background:#333333 ")
        boton.setAttribute("style","color:white")
        
      }else{
        fondo.setAttribute("style","background:white")
        boton.setAttribute("style","color:black")
        
      }
      localStorage.setItem("seleccion", !newDaylight)
      setDaylight(!newDaylight)
    }
    
    
  
    return (
      <AppContext.Provider
      value={{palabra,handleWord,daylight, handleDaylight}}
      >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}


