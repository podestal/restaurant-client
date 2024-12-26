import useLanguageStore from "../hooks/store/useLanguageStore"
import { motion } from "framer-motion"

const CareersPage = () => {

  const lan = useLanguageStore(s => s.lan)

  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="my-20 flex flex-col gap-6 font-montserrat">
        <h2 className="text-4xl font-bold font-palanquin">
          {lan === 'EN' ? 'Careers' : 'Carreras'}
        </h2>
        <p>
          {lan === 'EN' ?  'At Quenteh, we are transforming the way restaurants operate by providing intelligent, user-friendly solutions that redefine restaurant management.' : 'En Quenteh, estamos transformando la forma en que operan los restaurantes al proporcionar soluciones inteligentes y fáciles de usar que redefinen la gestión de restaurantes.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">
          {lan === 'EN' ?  'Why Work with Us?' : '¿Por qué Trabajar con Nosotros?'}
        </h3>
        <p>
          {lan === 'EN' ? 'Although we currently have no open positions, Quenteh is always looking for passionate individuals who want to:' : 'Aunque actualmente no tenemos posiciones abiertas, Quenteh siempre está buscando personas apasionadas que quieran:'}
        </p>
        <ul>
            <li>- 
              {lan === 'EN' ? 'Build innovative technology that makes a real impact on restaurant businesses.' : 'Construir tecnología innovadora que tenga un impacto real en los negocios de restaurantes.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Work in a collaborative and supportive environment where creativity and initiative are valued.' : 'Trabajar en un entorno colaborativo y de apoyo donde se valora la creatividad y la iniciativa.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Be part of a growing company that values personal growth, innovation, and excellence.' : 'Ser parte de una empresa en crecimiento que valora el crecimiento personal, la innovación y la excelencia.'}
            </li>
        </ul>
        <h2 className="text-2xl font-semibold font-poppins">
          {lan === 'EN' ? 'Who We’re Looking For' : 'A Quienes Buscamos'}
        </h2>
        <p>
          {lan === 'EN' ? 'We seek individuals who are:' : 'Buscamos personas que sean:'}
        </p>
        <ul>
            <li>- 
              {lan === 'EN' ? 'Problem-solvers and critical thinkers.' : 'Solucionadores de problemas y pensadores críticos.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Passionate about technology, food, and making a difference.' : 'Apasionados por la tecnología, la comida y marcar la diferencia.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Eager to work on meaningful projects that help restaurants succeed.' : 'Deseosos de trabajar en proyectos significativos que ayuden a los restaurantes a tener éxito.'}
            </li>
        </ul>
        <h3 className="text-2xl font-semibold font-poppins">
          {lan === 'EN' ? 'Join Us' : 'Únete a Nosotros'}
        </h3>
        <p>
          {lan === 'EN' ? 'Want to stay in the loop for future opportunities? Send us your CV and a brief introduction at careers@quenteh.com, and we’ll reach out when positions open up.' : '¿Quieres mantenerte informado sobre futuras oportunidades? Envíanos tu CV y una breve presentación a careers@quenteh.com, y te contactaremos cuando se abran posiciones.'}
        </p>
        <p>
          {lan === 'EN' ? 'At Quenteh, we don’t just build software; we build solutions that bring restaurant dreams to life.' : 'En Quenteh, no solo construimos software; construimos soluciones que hacen realidad los sueños de los restaurantes.'}
        </p>
    </motion.div>
  )
}

export default CareersPage