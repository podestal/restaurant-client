import { RiMailFill, RiPhoneFill } from "@remixicon/react"
import logo from '../assets/imgs/logo.png'
import { useState } from "react"
import Modal from "../components/ui/Modal"
import TermsAndConditions from "../components/landing/TermsAndConditions"
import PrivacyPolicy from "../components/landing/PrivacyPolicy"

interface FooterLink {
    id: number
    name: string
    route: string
}

const links: FooterLink[] = [
    {
        id: 1,
        name: 'Features',
        route: 'features'
    },
    {
        id: 1,
        name: 'FAQs',
        route: 'faqs'
    },
    {
        id: 1,
        name: 'Demo',
        route: 'demo'
    },
]


const Footer = () => {

    const [showTerms, setShowTerms] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)

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
                    <p className="text-left">Your Restaurant Smarter</p>
                </div>
                <div className="flex flex-col justify-start items-center lg:items-start gap-2 lg:mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4">Company</h2>
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
                            {link.name}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col justify-start items-center lg:items-start gap-2 mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4 text-white">Contact</h2>
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
                        className="text-left hover:text-slate-50 cursor-pointer">Terms and Conditions</p>
                    <p 
                        onClick={() => setShowPrivacy(true)}
                        className="text-left hover:text-slate-50 cursor-pointer">Privacy Policy</p>
                </div>
            </div>            
            <div className="w-full flex justify-center items-center pt-20 ">
                <p className="">Quenteh &copy; all rights reserved.</p>
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