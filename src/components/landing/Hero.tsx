import imgHero from '../../assets/imgs/dish-no-bg-min.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:grid lg:grid-cols-5 place-content-center gap-12 lg:mt-[-100px]'>
        <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full flex flex-col justify-center max-lg:items-center items-start gap-6 lg:col-span-2'>
            <h2 className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-lg:text-center max-lg:leading-[4rem] font-montserrat font-bold'>Lorem ipsum dolor</h2>
            <p className='font-poppins mt-6 leading-8 dark:text-slate-300 max-lg:text-center max-lg:text-sm max-lg:leading-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat fugiat ab fuga delectus officia eveniet natus accusantium.</p>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='lg:col-span-3'>
            <img src={imgHero} alt="" />
        </motion.div>
    </div>
  )
}

export default Hero