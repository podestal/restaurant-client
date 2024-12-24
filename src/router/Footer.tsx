import { RiMailFill, RiPhoneFill } from "@remixicon/react"
import logo from '../assets/imgs/logo.png'
import { useState } from "react"
import Modal from "../components/ui/Modal"
import TermsAndConditions from "../components/landing/TermsAndConditions"
import PrivacyPolicy from "../components/landing/PrivacyPolicy"
import useLanguageStore from "../hooks/store/useLanguageStore"

interface FooterLink {
    id: number
    name: string
    esName: string
    route: string
}

const links: FooterLink[] = [
    {
        id: 1,
        name: 'Features',
        esName: 'Características',
        route: 'features'
    },
    {
        id: 2,
        name: 'FAQs',
        esName: 'Preguntas Frecuentes',
        route: 'faqs'
    },
    {
        id: 3,
        name: 'Demo',
        esName: 'Demo',
        route: 'demo'
    },
]


const Footer = () => {

    const [showTerms, setShowTerms] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)
    const lan = useLanguageStore(s => s.lan)

  return (
    <div className="w-full h-full dark:bg-black bg-slate-950 text-slate-300 py-12 flex flex-col justify-start z-50 relative">
        <div className="w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1280px] mx-auto flex flex-col justify-center items-center">
            <div className="lg:grid lg:grid-cols-4 flex flex-col gap-6 text-md w-full">
                <div className="flex flex-col justify-start lg:items-start items-center gap-6">
                    <div 
                        onClick={() => {
                            const element = document.getElementById('hero')
                            if (element) {
                              const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
                              
                              window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth',
                              });
                            }
                        }}
                        className="cursor-pointer hover:opacity-90">
                        <img src={logo} alt="LOGO" width={150} />
                    </div>
                    <p className="text-left">{lan === 'EN' ? 'Your Restaurant Smarter' : 'Tu Restaurante Más Inteligente'}</p>
                </div>
                <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4">{lan === 'EN' ? 'Company' : 'Empresa'}</h2>
                    {links.map( link => (
                        <p 
                            key={link.id}
                            className="cursor-pointer hover:text-slate-50"
                            onClick={() => {
                                const element = document.getElementById((link.route))
                                if (element) {
                                  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
                                  
                                  window.scrollTo({
                                    top: offsetTop,
                                    behavior: 'smooth',
                                  });
                                }
                            }}
                        >
                            {lan === 'EN' ? link.name : link.esName}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col justify-start items-center lg:items-start gap-2 mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4 text-white">{lan === 'EN' ? 'Contact' : 'Contáctanos'}</h2>
                    <div className="flex justify-end items-center gap-4">
                        <p>(908) 5255111</p>
                        <RiPhoneFill />
                    </div>
                    <div className="flex justify-end items-center gap-4">
                        <p>sales@resto.com</p>
                        <RiMailFill />
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center lg:items-start gap-2 mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4 text-white">Legal</h2>
                    <p 
                        onClick={() => setShowTerms(true)}
                        className="text-left hover:text-slate-50 cursor-pointer">{lan === 'EN' ? 'Terms and Conditions' : 'Términos y condiciones'}</p>
                    <p 
                        onClick={() => setShowPrivacy(true)}
                        className="text-left hover:text-slate-50 cursor-pointer">{lan === 'EN' ?'Privacy Policy' : 'Política de Privacidad'}</p>
                </div>
            </div>            
            <div className="w-full flex justify-center items-center pt-20 ">
                <p className="">&copy; {lan === 'EN' ? 'Quenteh all rights reserved.' : `Quenteh todos los derenchos reservados.`}</p>
            </div>
            <Modal 
                isOpen={showTerms}
                onClose={() => setShowTerms(false)}
            >
                <div className="flex flex-col gap-6 text-black dark:text-white">
                    <TermsAndConditions />
                </div>
            </Modal>
            <Modal 
                isOpen={showPrivacy}
                onClose={() => setShowPrivacy(false)}
            >
                <div className="flex flex-col gap-6 text-black dark:text-white">
                    <PrivacyPolicy />
                </div>
            </Modal>
        </div>
    </div>
  )
}

export default Footer