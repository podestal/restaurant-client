import Navigator from "../router/Navigator"
import { Outlet } from "react-router-dom"

const MainPage = () => {

  return (
    <div className="min-h-screen dark:bg-slate-950 dark:text-slate-50 mx-auto">
        <Navigator />
        <Outlet />
    </div>
  )
}

export default MainPage