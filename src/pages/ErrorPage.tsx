import Button from "../components/ui/Button" 
import { useNavigate } from "react-router-dom" 
import useThemeStore from "../hooks/store/useThemeStore"
import ThemeSelector from "../components/ui/ThemeSelector"

const ErrorPage = () => {

    const navigate = useNavigate()
    const theme = useThemeStore(s => s.theme)

    console.log('theme', theme);
    

    return (
        <div className="w-full min-h-screen dark:bg-slate-950 dark:text-slate-50 flex flex-col justify-center items-center gap-6">
            <h2 className="text-8xl font-bold">404 Ops!</h2>
            <p className="text-2xl">This page does not exist</p>
            <ThemeSelector />
            <Button 
                label="Let's go back"
                onClick={() => navigate('/')} />
        </div>
    )
}

export default ErrorPage 