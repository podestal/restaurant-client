import { Link } from "react-router-dom"
import ThemeSelector from "../components/ui/ThemeSelector"
import Button from "../components/ui/Button"
import Cart from "../components/cart/Cart"
import { useNavigate } from "react-router-dom"
import useAuthStore from "../hooks/store/useAuthStore"
import Logout from "../components/auth/Logout"

const Navigator = () => {

    const navigate = useNavigate()
    const access = useAuthStore(s => s.access)

  return (
    <div className="w-full dark:bg-slate-950 bg-white fixed z-40 shadow-lg shadow-slate-400 dark:shadow-slate-700 max-lg:hidden">
        <div className="w-full flex justify-between items-center h-[100px] 2xl:max-w-[1280px] mx-auto">
            <Link to='/'><h2 className="text-5xl font-bold">loGO</h2></Link>
            <div className="flex justify-center items-center gap-24 font-montserrat">
                {!access && 
                <>
                <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'menu'}>Menu</Link>
                <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'about'}>About Us</Link>
                <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'catering'}>Catering</Link>
                </>
                }
                <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'menu'}>Menu</Link>
                {access && <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'dishes'}>Dishes</Link>}
                {access && <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'tables'}>Tables</Link>}
                {access && <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'kitchen'}>Kitchen</Link>}
                {access && <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={'dashboard'}>Dashboard</Link>}
            </div>
            <div className="flex justify-center items-center gap-12">
                <ThemeSelector />
                {access 
                ? 
                <Logout /> 
                : 
                <Button 
                    label="Login"
                    onClick={() => navigate('/login')}
                />}
                <Cart />
            </div>
        </div>
    </div>
  )
}

export default Navigator