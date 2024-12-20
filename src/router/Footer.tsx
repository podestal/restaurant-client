import { RiMailFill, RiPhoneFill } from "@remixicon/react"

interface FooterLink {
    id: number
    name: string
}

const links: FooterLink[] = [
    {
        id: 1,
        name: 'Features'
    },
    {
        id: 1,
        name: 'FAQs'
    },
    {
        id: 1,
        name: 'Demo'
    },
]


const Footer = () => {
  return (
    <div className="w-full h-full bg-slate-950 text-slate-300 py-12 flex flex-col justify-start">
        <div className="w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1280px] mx-auto flex flex-col justify-center items-center">
            <div className="grid grid-cols-4 gap-6 text-md w-full">
                <div className="flex flex-col justify-start items-start gap-2">
                    <h2 className="text-left text-5xl text-white">LoGO</h2>
                    <p className="text-left">Your Restaurant Smarter</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4">Company</h2>
                    {links.map( link => (
                        <p 
                            key={link.id}
                            className="cursor-pointer hover:text-slate-50"
                        >
                            {link.name}
                        </p>
                    ))}
                </div>
                <div className="flex flex-col justify-start items-start gap-2 mx-auto">
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
                <div className="flex flex-col justify-start items-start gap-2 mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4 text-white">Legal</h2>
                    <p className="text-left">Terms and Conditions</p>
                    <p className="text-left">Privacy Policy</p>
                </div>
            </div>            
            <div className="w-full flex justify-center items-center pt-20 ">
                <p className="">&copy; Resto all rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer