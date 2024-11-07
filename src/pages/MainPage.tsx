import Navigator from "../router/Navigator"
import { Outlet } from "react-router-dom"

const MainPage = () => {

  return (
    <div className="min-h-screen dark:bg-slate-950 dark:text-slate-50 mx-auto">
        <div className="w-full flex justify-center bg-slate-900 z-50">
            <Navigator />
        </div>
       <div className="pt-[100px]">
        <Outlet />
       </div>
    </div>
  )
}

export default MainPage