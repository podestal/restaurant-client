import { RiMapPin2Fill } from "@remixicon/react"

const PickupAddress = () => {
  return (
    <div className="w-[50%] flex flex-col justify-start items-center mx-auto gap-6 pb-6">
        <h2 className="text-2xl font-poppins font-bold">Pickup Address</h2>
        <a 
            className="flex w-full justify-center gap-4"
            target="_blank"
            href="https://www.google.com/maps/place/1020+Madison+Ave,+Elizabeth,+NJ+07201/@40.6846986,-74.2026598,16z/data=!3m1!4b1!4m6!3m5!1s0x89c252bf2c71038f:0xe3a9ec128432823e!8m2!3d40.6846946!4d-74.2000849!16s%2Fg%2F11c22dxg6p?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
             <RiMapPin2Fill 
                className="text-blue-600 hover:text-blue-500 cursor-pointer"
            />
            <p className="dark:text-slate-300 dark:hover:text-slate-100 hover:text-neutral-600">217 first street Elizabeth NJ 07206</p>
        </a>
    </div>
  )
}

export default PickupAddress