import useLanguageStore from "../hooks/store/useLanguageStore"
import { motion } from "framer-motion"

const About = () => {

  const lan = useLanguageStore(s => s.lan)

  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="my-20 flex flex-col gap-6 font-montserrat">
        <h2 className="text-4xl font-bold font-palanquin">
          {lan === 'EN' ? 'About' : 'Nosotros'}
        </h2>
        <p>
          {lan === 'EN' ? 'Welcome to Quenteh, the ultimate restaurant management solution designed to simplify and elevate how restaurants operate.' : 'Bienvenido a Quenteh, la solución definitiva de gestión de restaurantes diseñada para simplificar y elevar la forma en que operan los restaurantes.'}
        </p>
        <p>
          {lan === 'EN' ? 'Running a restaurant is no small feat, but with Quenteh, you can focus on what truly matters—delivering exceptional food and experiences—while we handle the complexities of managing your business.' : 'Administrar un restaurante no es tarea fácil, pero con Quenteh, puedes centrarte en lo que realmente importa: ofrecer comida y experiencias excepcionales, mientras nosotros nos encargamos de las complejidades de gestionar tu negocio.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">
          {lan === 'EN' ? 'What We Do' : 'Lo que Hacemos'}
        </h3>
        <p>
          {lan === 'EN' ? 'Quenteh is a cutting-edge platform that empowers restaurant owners to:' : 'Quenteh es una plataforma de vanguardia que permite a los dueños de restaurantes:'}
        </p>
        <ul className="flex flex-col gap-2">
          <li>- 
            <span className="font-semibold">
              {lan === 'EN' ? 'Take and Manage Orders Efficiently:' : 'Tomar y Gestionar Pedidos Eficientemente:'}
            </span> 
            {lan === 'EN' ? 'Streamline orders with real-time updates and intuitive displays. Orders are shown in the kitchen with color-coded indicators based on time passed, ensuring faster service and reduced errors.' : 'Optimiza los pedidos con actualizaciones en tiempo real y pantallas intuitivas. Los pedidos se muestran en la cocina con indicadores codificados por colores según el tiempo transcurrido, garantizando un servicio más rápido y menos errores.'}
          </li>
          <li>- 
            <span className="font-semibold">
              {lan === 'EN' ? 'Organize Your Menu:' : 'Organizar tu Menú:'}
            </span> 
            {lan === 'EN' ? 'Easily manage dishes, categories, promotions, and discounts with a few clicks. Keep your menu updated and dynamic.' : 'Administra fácilmente platos, categorías, promociones y descuentos con unos pocos clics. Mantén tu menú actualizado y dinámico.'}
          </li>
          <li>- 
            <span className="font-semibold">
              {lan === 'EN' ? 'Boost Productivity with Dashboards:' : 'Aumentar la Productividad con Paneles de Control:'}
            </span> 
            {lan === 'EN' ? 'Access detailed dashboards that track sales, orders, and overall performance, giving you valuable insights to make data-driven decisions.' : 'Accede a paneles de control detallados que rastrean ventas, pedidos y rendimiento general, brindándote información valiosa para tomar decisiones basadas en datos.'}
          </li>
          <li>- 
            <span className="font-semibold">
              {lan === 'EN' ? 'Automate Billing:' : 'Automatizar Facturación:'}
            </span> 
            {lan === 'EN' ? 'Generate electronic invoices (boletas and facturas) seamlessly, complying with legal standards and saving you time.' : 'Genera facturas electrónicas (boletas y facturas) sin problemas, cumpliendo con los estándares legales y ahorrándote tiempo.'}
          </li>
        </ul>
        <p>
          {lan === 'EN' ? 'At Quenteh, our goal is to simplify your processes while maximizing your efficiency. Whether you are a small café or a large restaurant chain, our tools are designed to grow with your business.' : 'En Quenteh, nuestro objetivo es simplificar tus procesos al tiempo que maximizamos tu eficiencia. Ya sea un pequeño café o una gran cadena de restaurantes, nuestras herramientas están diseñadas para crecer con tu negocio.'}
        </p>
    </motion.div>
  )
}

export default About