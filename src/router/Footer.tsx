import { RiMailFill, RiPhoneFill } from "@remixicon/react"


const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-white py-12 flex flex-col justify-start">
        <div className="w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1280px] mx-auto flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 gap-6 text-md w-full">
                <div className="flex flex-col justify-start items-start gap-2">
                    <h2 className="text-left text-5xl">LoGO</h2>
                    <p className="text-left">Your Restaurant Smarter</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 mx-auto">
                    <h2 className="text-2xl font-palanquin font-bold mb-4">Company</h2>
                    <p>Features</p>
                    <p>FAQs</p>
                    <p>Demo</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="flex flex-col justify-start items-end gap-2">
                    <h2 className="text-2xl font-palanquin font-bold mb-4">Contact</h2>
                    <div className="flex justify-end items-center gap-4">
                        <p>(908) 5255111</p>
                        <RiPhoneFill />
                    </div>
                    <div className="flex justify-end items-center gap-4">
                        <p>sales@resto.com</p>
                        <RiMailFill />
                    </div>
                </div>
            </div>            
            <div className="w-full flex justify-center items-center pt-20 ">
                <p className="text-sm">&copy; Resto all rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer