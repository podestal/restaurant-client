import { motion } from 'framer-motion';
import My3DModel from './My3dModel';
import TomatoComponent from './TomatoComponent';
import SteakComponent from './SteakComponent';

const Hero = () => {
  return (
    <section 
      id='hero'
      className="w-full h-screen overflow-hidden lg:mt-[-100px]">
      <div className="h-full z-10 flex flex-col place-content-center gap-12 relative">
        {/* Left Text Section */}
        <div 
          className="w-[50%] h-[500px] absolute top-0 left-0">
          <My3DModel />
        </div>
        <div className="w-[50%] h-[400px] absolute top-8 right-0">
          <TomatoComponent />
        </div>
        <div className="w-[50%] h-[400px] absolute bottom-0 right-1/2">
          <SteakComponent />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center max-lg:items-center items-center gap-6 lg:col-span-2"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-lg:text-center leading-[18rem] max-lg:leading-[4rem] font-montserrat font-bold text-center">
            Your Restaurant Smarter
          </h2>
          <p className="w-[60%] font-poppins mt-6 leading-8 dark:text-slate-300 max-lg:text-center max-lg:text-xs max-lg:leading-8 text-center">
          From managing tables and menus to tracking orders, simplify every aspect of your operations and focus on what truly matters—delivering exceptional dining experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
