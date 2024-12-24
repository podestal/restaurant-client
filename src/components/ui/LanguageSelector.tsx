import { useState } from "react"

const LanguageSelector = () => {

    const [language, setLanguage] = useState('EN')

  return (
    <div className="flex gap-2 font-montserrat">
        <p 
            onClick={() => setLanguage('EN')}
            className={`cursor-pointer  ${language === 'EN' && 'text-blue-600 font-semibold'}`}>EN</p>
        <p  
            onClick={() => setLanguage('ES')}
            className={`cursor-pointer  ${language === 'ES' && 'text-blue-600 font-semibold'}`}>ES</p>
    </div>
  )
}

export default LanguageSelector