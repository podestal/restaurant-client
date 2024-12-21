import { useEffect } from 'react'
import useThemeStore from '../../hooks/store/useThemeStore'
import { RiMoonFill, RiSunFill } from '@remixicon/react'

const ThemeSelector = () => {

    const {theme, switchTheme} = useThemeStore()

    useEffect(() => {
        if (theme === 'dark') {
          document.querySelector('html')?.classList.add('dark')
          // document.querySelector('html')?.style('background-color: rgb(2 6 23);')
        } else {
          document.querySelector('html')?.classList.remove('dark')
        }
      }, [theme])
  
    const handleChangeTheme = () => {
      switchTheme(theme)
    }

  return (
    // <div>
    //     <button
    //     onClick={handleChangeTheme}
    //     className="p-2 rounded-md text-lg transition duration-300 bg-slate-300 dark:bg-blue-700"
    //     >
    //     {theme === 'dark' ? '🌞 Light Mode' : '🌜 Dark Mode'}
    //     </button>
    // </div>
    <div className="flex max-lg:flex-col justify-center items-center gap-6 lg:gap-2">
        {/* <p>{theme === 'dark' ? '🌜' : '🌞'}</p> */}
        {theme === 'dark' ? <RiMoonFill className='text-blue-600'/> : <RiSunFill className='text-blue-600' />}
        <div 
            className={`relative inline-block w-8 h-4 transition duration-200 ease-in 
                        ${theme !== 'dark' ? 'bg-blue-600' : 'bg-gray-300'} 
                        rounded-full cursor-pointer`}
            onClick={handleChangeTheme}
            >
            <input 
                type="checkbox" 
                checked={theme !== 'dark' ? true : false}

                onChange={handleChangeTheme} 
                className="sr-only peer" 
            />
            <div 
                className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow-md 
                            transition-transform duration-200 transform 
                            ${theme !== 'dark' ? 'translate-x-4' : 'translate-x-0'}`}
            ></div>
            
        </div>
        {/* {theme && <p className="text-lg lg:text-xl dark:text-slate-50 text-center">{theme}</p>} */}
    </div>
  )
}

export default ThemeSelector