import { motion } from 'framer-motion';
import customize from '../../assets/imgs/customize.png';
import forgetPaper from '../../assets/imgs/forget_paper.png';
import keepTrack from '../../assets/imgs/keep_track.png';
import OrderOnline from '../../assets/imgs/order_online.png';
import electronicSunat from '../../assets/imgs/electronic_sunat.png';

const Features = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <section className="h-full mt-10 flex flex-col gap-20">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={variants}
        >
            <h2 className='text-6xl font-palanquin font-bold'>Features</h2>
        </motion.div>
      <motion.div
        className="w-full grid grid-cols-3 gap-12 my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <div className="flex flex-col justify-start items-start gap-12">
          <h2 className="text-4xl font-bold font-palanquin">Customize Your Menu</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
        </div>
        <img className="col-span-2" src={customize} alt="Customize Your Menu" />
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-3 gap-12 my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <img className="col-span-2" src={forgetPaper} alt="Forget Paper" />
        <div className="flex flex-col justify-start items-start gap-12">
          <h2 className="text-4xl font-bold font-palanquin">Forget Paper</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
        </div>
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-3 gap-12 my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <div className="flex flex-col justify-start items-start gap-12">
          <h2 className="text-4xl font-bold font-palanquin">Keep Track</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
        </div>
        <img className="col-span-2" src={keepTrack} alt="Keep Track" />
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-3 gap-12 my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <img className="col-span-2" src={OrderOnline} alt="Order Online" />
        <div className="flex flex-col justify-start items-start gap-12">
          <h2 className="text-4xl font-bold font-palanquin">Order Online Safe</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
        </div>
      </motion.div>

      <motion.div
        className="w-full grid grid-cols-3 gap-12 my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
      >
        <div className="flex flex-col justify-start items-start gap-12">
          <h2 className="text-4xl font-bold font-palanquin">Electronic Billing</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt reiciendis rerum explicabo temporibus totam, aut eaque est voluptate minima error amet exercitationem commodi doloribus eius cum voluptas maxime nemo.</p>
        </div>
        <img className="col-span-2" src={electronicSunat} alt="Electronic Billing" />
      </motion.div>
    </section>
  );
};

export default Features;
