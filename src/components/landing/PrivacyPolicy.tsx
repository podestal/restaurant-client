import useLanguageStore from "../../hooks/store/useLanguageStore"

const PrivacyPolicy = () => {

  const lan = useLanguageStore(s => s.lan)

  return (
    <>
        <h2 className="text-4xl font-bold font-palanquin">
          {lan === 'EN' ? 'Privacy Policy' : 'Política de Privacidad'}
        </h2>
        <p>
          {lan === 'EN' ? 'At QUENTEH, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.' : 'En QUENTEH, valoramos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información personal.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">1. 
          {lan === 'EN' ? 'Information We Collect' : 'Información que Recopilamos'}
        </h3>
        <p>1.1. 
          {lan === 'EN' ? "Account Information: When you register, we collect details such as your name, email address, and contact information." : "Información de la Cuenta: Cuando te registras, recopilamos detalles como tu nombre, dirección de correo electrónico e información de contacto."}
        </p>
        <p>1.2. 
          {lan === 'EN' ? 'Order Details: Information related to your orders, such as items purchased, payment details, and delivery preferences.' : 'Detalles del Pedido: Información relacionada con tus pedidos, como los artículos comprados, los detalles de pago y las preferencias de entrega.'}
        </p>
        <p>1.3. 
          {lan === 'EN' ? "Usage Data: We collect data on how you interact with our app, such as device information, IP address, and usage patterns." : "Datos de Uso: Recopilamos datos sobre cómo interactúas con nuestra aplicación, como información del dispositivo, dirección IP y patrones de uso."}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">2. 
          {lan === 'EN' ? 'How We Use Your Information' : 'Cómo Utilizamos tu Información'}
        </h3>
        <p>
          {lan === 'EN' ? 'We use your information to:' : 'Utilizamos tu información para:'}
        </p>
        <ul>
            <li>- 
              {lan === 'EN' ? 'Process and fulfill orders.' : 'Procesar y cumplir pedidos.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Improve our Services.' : 'Mejorar nuestros Servicios.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Send promotional offers and updates (you can opt-out at any time).' : 'Enviar ofertas promocionales y actualizaciones (puedes darte de baja en cualquier momento).'}
            </li>
        </ul>
        <h3 className="text-2xl font-semibold font-poppins">3. 
          {lan === 'EN' ? 'Sharing Your Information' : 'Compartir tu Información'}
        </h3>
        <p>
          {lan === 'EN' ? 'We do not sell your personal information. However, we may share your data with:' : 'No vendemos tu información personal. Sin embargo, podemos compartir tus datos con:'}
        </p>
        <ul>
            <li>- 
              {lan === 'EN' ? 'Third-Party Providers: For payment processing, analytics, and other operational purposes.' : 'Proveedores de Terceros: Para el procesamiento de pagos, análisis y otros fines operativos.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Legal Authorities: When required by law or to protect our rights.' : 'Autoridades Legales: Cuando sea requerido por la ley o para proteger nuestros derechos.'}
            </li>
        </ul>
        <h3 className="text-2xl font-semibold font-poppins">4. 
          {lan === 'EN' ? 'Data Security' : 'Seguridad de los Datos'}
        </h3>
        <p>
          {lan === 'EN' ? 'We implement security measures to protect your data. However, no system is entirely secure, and we cannot guarantee absolute protection.' : 'Implementamos medidas de seguridad para proteger tus datos. Sin embargo, ningún sistema es completamente seguro y no podemos garantizar una protección absoluta.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">5. 
          {lan === 'EN' ? 'Your Rights' : 'Tus Derechos'}
        </h3>
        <p>
          {lan === 'EN' ? 'You have the right to:' : 'Tienes derecho a:'}
        </p>
        <ul>
            <li>- 
              {lan === 'EN' ? 'Access the personal data we hold about you.' : 'Acceder a los datos personales que tenemos sobre ti.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Request corrections to inaccuracies.' : 'Solicitar correcciones a inexactitudes.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Request the deletion of your data (subject to legal obligations).' : 'Solicitar la eliminación de tus datos (sujeto a obligaciones legales).'}
            </li>
        </ul>
        <h3  className="text-2xl font-semibold font-poppins">6. Cookies</h3>
        <p>
          {lan === 'EN' ? 'Our app uses cookies to enhance user experience and gather analytics. You can manage cookie preferences through your browser settings.' : 'Nuestra aplicación utiliza cookies para mejorar la experiencia del usuario y recopilar análisis. Puedes gestionar las preferencias de las cookies a través de la configuración de tu navegador.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">7. 
          {lan === 'EN' ? 'Changes to This Policy' : 'Cambios a Esta Política'}
        </h3>
        <p>
          {lan === 'EN' ? 'We may update this Privacy Policy from time to time. Updates will be posted in the app, and it is your responsibility to review them periodically.' : 'Podemos actualizar esta Política de Privacidad de vez en cuando. Las actualizaciones se publicarán en la aplicación, y es tu responsabilidad revisarlas periódicamente.'}
        </p>
    </>
  )
}

export default PrivacyPolicy