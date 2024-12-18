import { motion } from 'framer-motion';
import customize from '../../assets/imgs/customize.png';
import forgetPaper from '../../assets/imgs/forget_paper.png';
import keepTrack from '../../assets/imgs/keep_track.png';
import OrderOnline from '../../assets/imgs/order_online.png';
import electronicSunat from '../../assets/imgs/electronic_sunat.png';

interface Feature {
    id: number
    title: string
    description: string
    img: string
}

const featuresContent: Feature[] = [
    {
        id: 1,
        title: 'Customize Your Menu',
        description: 'Easily update and manage your restaurant’s menu in real time. Add new dishes, adjust prices, and highlight special promotions effortlessly. With the app, your menu stays dynamic and up-to-date, ensuring your customers always see the latest offerings.',
        img: customize,
    },
    {
        id: 2,
        title: 'Forget Paper',
        description: 'Say goodbye to paper notes! Empower your waitstaff to take orders directly through the app, which are instantly sent to the kitchen. Streamline communication, reduce errors, and improve service speed, ensuring a smoother dining experience for both customers and staff.',
        img: forgetPaper,
    },
    {
        id: 3,
        title: 'Keep Track',
        description: 'Gain valuable insights into your business with detailed analytics. Track daily, monthly, and yearly sales, see which dishes are selling the most, and monitor order trends. Use this data to make informed decisions and optimize your menu and operations.',
        img: keepTrack,
    },
    {
        id: 4,
        title: 'Online Safe Order',
        description: 'Allow customers to place orders safely and securely online, powered by Stripe’s reliable payment processing. Whether for dine-in, pickup, or delivery, your customers can enjoy a seamless ordering experience with confidence.',
        img: OrderOnline,
    },
    {
        id: 5,
        title: 'Electronic Billing',
        description: 'Simplify your billing process with automated generation of boletas and facturas. Comply with regulations effortlessly and provide professional receipts to your customers while saving time for your staff.',
        img: electronicSunat,
    },
]

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
        {featuresContent.map( feature => (
            <motion.div
                className={`w-full grid grid-cols-3 gap-12 my-10`}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={variants}
                key={feature.id}
            >
                <div className="flex flex-col justify-start items-start gap-12">
                    <h2 className="text-4xl font-bold font-palanquin">{feature.title}</h2>
                    <p>{feature.description}</p>
                </div>
                <img className={`col-span-2 ${feature.id % 2 === 0 && 'order-first'}`} src={feature.img} alt={feature.title} />
            </motion.div>
        ))}
      {/* <motion.div
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
      </motion.div> */}
    </section>
  );
};

export default Features;
