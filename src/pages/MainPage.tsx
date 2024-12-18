import Loader from "../components/ui/Loader"
import NotificationCard from "../components/ui/NotificationCard"
import useLoadingStore from "../hooks/store/useLoadingStore"
import useNotificationsStore from "../hooks/store/useNotificationsStore"
import useAssetLoader from "../hooks/ui/useAssetsLoader"
import Footer from "../router/Footer"
import Navigator from "../router/Navigator"
import { Outlet } from "react-router-dom"

const MainPage = () => {


    useAssetLoader()
    const { type, message, reset, show } = useNotificationsStore()
    const isLoading = useLoadingStore(s => s.isLoading)

  return (
    <div className="min-h-screen dark:bg-slate-950 dark:text-slate-50 mx-auto relative">
        {show && 
        <NotificationCard 
            type={type}
            message={message}
            reset={reset}
        />}
        <div className="w-full flex justify-center bg-slate-900 z-50 lg:pb-[100px]">
            <Navigator />
        </div>
        {isLoading && <Loader />}
        <>
        <div className="w-full min-h-screen max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1280px] mx-auto">
          <Outlet />
        </div>
        <Footer />
        </>
    </div>
  )
}

export default MainPage