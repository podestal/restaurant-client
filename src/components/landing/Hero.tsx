import imgHero from '../../assets/imgs/dish-no-bg-min.png';
import { motion } from 'framer-motion';
import { Lumiflex } from 'uvcanvas';

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden lg:mt-[-100px]">
      {/* Lumiflex Background */}
      <Lumiflex
        style={{
          position: 'absolute',
          top: 0,
          right: 180,
          width: '30%',
          height: '100%',
          zIndex: -1, 
        }}
      />

      {/* Content */}
      <div className="h-full z-10 flex flex-col lg:grid lg:grid-cols-5 place-content-center gap-12">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col justify-center max-lg:items-center items-start gap-6 lg:col-span-2"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-lg:text-center max-lg:leading-[4rem] font-montserrat font-bold">
            Lorem ipsum dolor
          </h2>
          <p className="font-poppins mt-6 leading-8 dark:text-slate-300 max-lg:text-center max-lg:text-sm max-lg:leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat fugiat ab fuga delectus officia eveniet natus accusantium.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 flex justify-center items-center"
        >
          <img
            src={imgHero}
            alt="Dish"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
