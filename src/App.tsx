import { useEffect, useState } from "react"
import Button from "./components/ui/Button"

const App = () => {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    console.log('changing theme')
    
    setTheme( prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <h1 className="h-screen flex flex-col justify-center items-center text-3xl font-bold dark:bg-slate-950 dark:text-slate-50">
      <h2 className="text-5xl text-center">This is a text</h2>
      <p className="text-xs w-[40%] text-center my-6 dark:text-slate-400 text-neutral-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, labore. Itaque sunt molestiae pariatur unde obcaecati sapiente ea in consequuntur, eligendi, harum facere voluptate! Provident est recusandae ex commodi voluptatem.</p>
      <Button 
        label="Theme"
        onClick={handleChangeTheme}
      />
    </h1>
  )
}

export default App
