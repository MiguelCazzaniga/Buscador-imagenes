import { FaMoon } from "react-icons/Fa"
import { FaBahai } from "react-icons/Fa"
import { useGlobalContext } from "./Context"

const ThemeToggle = () => {
  const{daylight,handleDaylight}=useGlobalContext()
  return (
    <div className='ThemeToggleContainer'>
      <button onClick={handleDaylight} id="ThemeButton">
        {!daylight && <FaMoon></FaMoon>}
        {daylight && <FaBahai></FaBahai>}
      </button>
    </div>
  )
}
export default ThemeToggle
