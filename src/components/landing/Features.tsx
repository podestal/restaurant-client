import customize from '../../assets/imgs/customize.png'
import forgetPaper from '../../assets/imgs/forget_paper.png'
import keepTrack from '../../assets/imgs/keep_track.png'

const Features = () => {
  return (
    <div className="h-full mt-10 flex flex-col gap-20">
        <div className='w-full grid grid-cols-3 gap-12 my-10'>
            <div className='flex flex-col justify-start items-start gap-12'>
                <h2 className='text-4xl font-bold font-palanquin'>Customize your menu</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
            </div>
            <img className='col-span-2' src={customize} alt="" />
        </div>
        <div className='w-full grid grid-cols-3 gap-12 my-10'>
            <img className='col-span-2' src={forgetPaper} alt="" />
            <div className='flex flex-col justify-start items-start gap-12'>
                <h2 className='text-4xl font-bold font-palanquin'>Forget paper</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
            </div>
        </div>
        <div className='w-full grid grid-cols-3 gap-12 my-10'>
            <div className='flex flex-col justify-start items-start gap-12'>
                <h2 className='text-4xl font-bold font-palanquin'>Keep track</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
            </div>
            <img className='col-span-2' src={keepTrack} alt="" />
        </div>
        
        <div>Order online secure</div>
        
        <div>QR Menu</div>
        <div>Sunat</div>
    </div>
  )
}

export default Features