import { Link } from "react-router-dom"
import ThemeSelector from "../components/ui/ThemeSelector"
import Button from "../components/ui/Button"

const Navigator = () => {
  return (
    <div className="w-full flex justify-between items-center h-[100px] 2xl:max-w-[1280px] mx-auto">
        <h2 className="text-5xl font-bold">loGO</h2>
        <div className="flex justify-center items-center gap-24">
            <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'menu'}>Menu</Link>
            <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'menu'}>About Us</Link>
            <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'menu'}>Catering</Link>
        </div>
        <div className="flex justify-center items-center gap-12">
            <ThemeSelector />
            <Button 
                label="Login"
            />
        </div>
    </div>
  )
}

export default Navigator