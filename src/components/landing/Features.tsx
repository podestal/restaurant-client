import { motion } from 'framer-motion';
import customize from '../../assets/imgs/customize.png';
import forgetPaper from '../../assets/imgs/forget_paper.png';
import keepTrack from '../../assets/imgs/keep_track.png';
import OrderOnline from '../../assets/imgs/order_online.png';
import electronicSunat from '../../assets/imgs/electronic_sunat.png';
import useLanguageStore from '../../hooks/store/useLanguageStore';

interface Feature {
    id: number
    title: string
    esTitle: string
    description: string
    esDescription: string
    img: string
}

const featuresContent: Feature[] = [
    {
        id: 1,
        title: 'Customize Your Menu',
        esTitle: 'Personaliza tu menú',
        description: 'Easily update and manage your restaurant’s menu in real time. Add new dishes, adjust prices, and highlight special promotions effortlessly. With the app, your menu stays dynamic and up-to-date, ensuring your customers always see the latest offerings.',
        esDescription: 'Actualiza y administra fácilmente el menú de tu restaurante en tiempo real. Agrega nuevos platos, ajusta precios y destaca promociones especiales sin esfuerzo. Con la aplicación, tu menú se mantiene dinámico y actualizado, asegurando que tus clientes siempre vean las últimas ofertas.',
        img: customize,
    },
    {
        id: 2,
        title: 'Forget Paper',
        esTitle: 'Olvida el papel',
        description: 'Say goodbye to paper notes! Empower your waitstaff to take orders directly through the app, which are instantly sent to the kitchen. Streamline communication, reduce errors, and improve service speed, ensuring a smoother dining experience for both customers and staff.',
        esDescription: '¡Di adiós a las notas en papel! Empodera a tu personal de sala para tomar pedidos directamente a través de la aplicación, que se envían instantáneamente a la cocina. Simplifica la comunicación, reduce errores y mejora la velocidad del servicio, garantizando una experiencia gastronómica más fluida tanto para los clientes como para el personal.',
        img: forgetPaper,
    },
    {
        id: 3,
        title: 'Keep Track',
        esTitle: 'Mantén el control',
        description: 'Gain valuable insights into your business with detailed analytics. Track daily, monthly, and yearly sales, see which dishes are selling the most, and monitor order trends. Use this data to make informed decisions and optimize your menu and operations.',
        esDescription: 'Obtén valiosos conocimientos sobre, tu negocio con análisis detallados. Realiza un seguimiento de las ventas diarias, mensuales y anuales, ve qué platos se venden más y monitorea las tendencias de los pedidos. Utiliza estos datos para tomar decisiones informadas y optimizar tu menú y operaciones.',
        img: keepTrack,
    },
    {
        id: 4,
        title: 'Online Safe Order',
        esTitle: 'Pedido en línea seguro',
        description: 'Allow customers to place orders safely and securely online, powered by Stripe’s reliable payment processing. Whether for dine-in, pickup, or delivery, your customers can enjoy a seamless ordering experience with confidence.',
        esDescription: 'Permite a los clientes realizar pedidos de forma segura y protegida en línea, con el procesamiento de pagos confiable de Stripe. Ya sea para consumir en el local, para recoger o para entrega, tus clientes pueden disfrutar de una experiencia de pedido sin problemas con confianza.',
        img: OrderOnline,
    },
    {
        id: 5,
        title: 'Electronic Billing',
        esTitle: 'Facturación electrónica',
        description: 'Simplify your billing process with automated generation of boletas and facturas. Comply with regulations effortlessly and provide professional receipts to your customers while saving time for your staff.',
        esDescription: 'Simplifica tu proceso de facturación con la generación automática de boletas y facturas. Cumple con las regulaciones sin esfuerzo y proporciona recibos profesionales a tus clientes mientras ahorras tiempo a tu personal.',
        img: electronicSunat,
    },
]

const Features = () => {

  const lan = useLanguageStore(s => s.lan)

  const variants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <section 
        id='features'
        className="h-full mt-10 flex flex-col gap-20">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={variants}
        >
        <h2 className='text-4xl lg:text-6xl font-palanquin font-bold max-lg:text-center'>{lan === 'EN' ? 'Features' : 'Características'}</h2>
        </motion.div>
        {featuresContent.map( feature => (
            <motion.div
                className={`w-full lg:grid lg:grid-cols-3 flex flex-col gap-12 my-10`}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={variants}
                key={feature.id}
            >
                <div className="flex flex-col justify-start items-start gap-12 max-lg:text-center">
                    <h2 className="text-2xl lg:text-4xl font-bold font-palanquin max-lg:mx-auto ">{lan === 'EN' ? feature.title : feature.esTitle}</h2>
                    <p>{lan === 'EN' ? feature.description : feature.esDescription}</p>
                </div>
                <img className={`col-span-2 rounded-3xl ${feature.id % 2 === 0 && 'lg:order-first'}`} src={feature.img} alt={feature.title} />
            </motion.div>
        ))}
    </section>
  );
};

export default Features;
