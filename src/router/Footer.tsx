const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-black text-white py-12 flex flex-col justify-start">
        <div className="grid grid-cols-3 gap-6 text-md">
            <div className="flex flex-col justify-start items-center">
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex flex-col justify-start items-center">
                <p>Features</p>
                <p>FAQs</p>
                <p>Demo</p>
            </div>
            <div className="flex flex-col justify-start items-center">
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div className="w-full flex justify-center items-center mt-20">
            <p className="text-sm">&copy; Resto all rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer