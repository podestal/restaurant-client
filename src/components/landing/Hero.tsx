import imgHero from '../../assets/imgs/dish-no-bg-min.png'

const Hero = () => {
  return (
    <div className='w-full h-screen grid grid-cols-5 place-content-center gap-12 mt-[-100px]'>
        <div className='w-full flex flex-col justify-center items-start gap-6 col-span-2'>
            <h2 className='text-9xl font-montserrat font-bold'>Lorem ipsum dolor.</h2>
            <p className='font-poppins mt-6 leading-8 dark:text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat fugiat ab fuga delectus officia eveniet natus accusantium.</p>
        </div>
        <img className='col-span-3 font-semibold' src={imgHero} alt="" />
    </div>
  )
}

export default Hero