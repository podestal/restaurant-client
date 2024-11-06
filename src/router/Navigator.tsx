import { Link } from "react-router-dom"
import ThemeSelector from "../components/ui/ThemeSelector"

const Navigator = () => {
  return (
    <div className="w-full flex justify-between items-center h-[100px] 2xl:max-w-[1280px] mx-auto">
        <h2 className="text-5xl">loGO</h2>
        <div className="flex justify-center items-center gap-20">
            <Link to={'menu'}>Menu</Link>
            <Link to={'menu'}>About Us</Link>
            <Link to={'menu'}>Catering</Link>
        </div>
        <div className="flex justify-center items-center gap-12">
            <ThemeSelector />
            <Link to={'menu'}>Login</Link>
        </div>
    </div>
  )
}

export default Navigator