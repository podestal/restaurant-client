import NotificationCard from "../components/ui/NotificationCard"
import useNotificationsStore from "../hooks/store/useNotificationsStore"
import Navigator from "../router/Navigator"
import { Outlet } from "react-router-dom"

const MainPage = () => {

    const { type, message, reset, show } = useNotificationsStore()

  return (
    <div className="min-h-screen dark:bg-slate-950 dark:text-slate-50 mx-auto">
        <>{console.log('type', type)}</>
        {show && 
        <NotificationCard 
            type={type}
            message={message}
            reset={reset}
        />}
        <div className="w-full flex justify-center bg-slate-900 z-50 pb-[100px]">
            <Navigator />
        </div>
        <div className="w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1280px] mx-auto">
          <Outlet />
        </div>
    </div>
  )
}

export default MainPage