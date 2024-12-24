import useLanguageStore from "../../hooks/store/useLanguageStore"

const LanguageSelector = () => {

    const { lan, setLan } = useLanguageStore()

  return (
    <div className="flex gap-2 font-montserrat">
        <p 
            onClick={() => setLan('EN')}
            className={`cursor-pointer  ${lan === 'EN' && 'text-blue-600 font-semibold'}`}>EN</p>
        <p  
            onClick={() => setLan('ES')}
            className={`cursor-pointer  ${lan === 'ES' && 'text-blue-600 font-semibold'}`}>ES</p>
    </div>
  )
}

export default LanguageSelector