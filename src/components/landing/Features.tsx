import customize from '../../assets/imgs/customize.png'

const Features = () => {
  return (
    <div className="h-full mt-10 flex flex-col gap-20">
        <div className='w-full grid grid-cols-3 gap-12'>
            <div className='flex flex-col justify-start items-start gap-12'>
                <h2 className='text-4xl font-bold font-palanquin'>Customize your menu</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
            </div>
            <img className='col-span-2' src={customize} alt="" />
        </div>
        <div className='w-full grid grid-cols-3 gap-12'>
            <img className='col-span-2' src={customize} alt="" />
            <div className='flex flex-col justify-start items-start gap-12'>
                <h2 className='text-4xl font-bold font-palanquin'>Forget paper</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
            </div>
        </div>

        <div>Order online secure</div>
        <div>Dashvboard</div>
        <div>QR Menu</div>
        <div>Sunat</div>
    </div>
  )
}

export default Features