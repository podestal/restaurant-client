import useLanguageStore from "../../hooks/store/useLanguageStore"

const TermsAndConditions = () => {

  const lan = useLanguageStore(s => s.lan)

  return (
    <>
        <h2 className="text-4xl font-bold font-palanquin">{lan === 'EN' ? 'Terms and Conditions' : 'Términos y Condiciones'}</h2>
        <p>
          {lan === 'EN' ? 'Welcome to Quenteh! These Terms and Conditions govern your use of our app, services, and website. By using our Services, you agree to these Terms. If you do not agree, please do not use our Services.' : '¡Bienvenido a Quenteh! Estos Términos y Condiciones rigen su uso de nuestra aplicación, servicios y sitio web. Al utilizar nuestros Servicios, usted acepta estos Términos. Si no está de acuerdo, por favor no utilice nuestros Servicios.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">
          {lan === 'EN' ? '1. Use of Services' : '1. Uso de los Servicios'}
        </h3>
        <p>
          {lan === 'EN' ? '1.1. Eligibility: You must be at least 18 years old or have the consent of a parent or guardian to use our Services.' : '1.1. Elegibilidad: Debes tener al menos 18 años de edad o contar con el consentimiento de un padre o tutor para utilizar nuestros Servicios.'}
        </p>
        <p>
          {lan === 'EN' ? '1.2. Account Responsibility: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.' : '1.2. Responsabilidad de la Cuenta: Eres responsable de mantener la confidencialidad de tus credenciales de cuenta y de todas las actividades bajo tu cuenta.'}
        </p>
        <p>
          {lan === 'EN' ? '1.3. Prohibited Activities: You agree not to use our Services for any unlawful or unauthorized purposes, including but not limited to:' : '1.3. Actividades Prohibidas: Aceptas no utilizar nuestros Servicios para fines ilegales o no autorizados, incluyendo pero no limitado a:'}
        </p>
        <ul>
            <li>- 
              {lan === 'EN' ? 'Sharing false or misleading information.' : 'Compartir información falsa o engañosa.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Attempting to hack, disrupt, or exploit our Services.' : 'Intentar hackear, interrumpir o explotar nuestros Servicios.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Violating the rights of others.' : 'Violar los derechos de terceros.'}
            </li>
        </ul>
        <h3 className="text-2xl font-semibold font-poppins">2. 
          {lan === 'EN' ? 'Ordering and Payments' : 'Pedidos y Pagos'}
        </h3>
        <p>2.1. 
          {lan === 'EN' ? 'Orders: Orders placed through the app are final once confirmed. Any modifications or cancellations are subject to the restaurant policies.' : 'Pedidos: Los pedidos realizados a través de la aplicación son finales una vez confirmados. Cualquier modificación o cancelación está sujeta a las políticas del restaurante.'}
        </p>
        <p>2.2. 
          {lan === 'EN' ? 'Payments: All payments are securely processed through third-party providers like Stripe. We do not store your payment information.' : 'Pagos: Todos los pagos son procesados de forma segura a través de proveedores de terceros como Stripe. No almacenamos tu información de pago.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">3. 
          {lan === 'EN' ? 'User-Generated Content' : 'Contenido Generado por el Usuario'}
        </h3>
        <p>3.1. 
          {lan === 'EN' ? 'Responsibility: You retain ownership of any content you upload but grant us a non-exclusive, worldwide license to use it as necessary for our Services.' : 'Responsabilidad: Conservas la propiedad de cualquier contenido que subas pero nos otorgas una licencia no exclusiva y mundial para utilizarlo según sea necesario para nuestros Servicios.'}
        </p>
        <p>3.2. 
          {lan === 'EN' ? 'Removal: We reserve the right to remove user-generated content that violates our Terms or is deemed inappropriate.' : 'Eliminación: Nos reservamos el derecho de eliminar contenido generado por el usuario que viole nuestros Términos o sea considerado inapropiado.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">4. 
          {lan === 'EN' ? 'Limitations of Liability' : 'Limitaciones de Responsabilidad'}
        </h3>
        <p>
          {lan === 'EN' ? 'We are not liable for:' : 'No somos responsables por:'}
        </p>
        <ul>
            <li>- 
              {lan === 'EN' ? 'Errors in orders caused by users.' : 'Errores en pedidos causados por usuarios.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Technical interruptions beyond our control.' : 'Interrupciones técnicas fuera de nuestro control.'}
            </li>
            <li>- 
              {lan === 'EN' ? 'Losses incurred due to misuse of the Services.' : 'Pérdidas incurridas debido al mal uso de los Servicios.'}
            </li>
        </ul>
        <h3 className="text-2xl font-semibold font-poppins">5. 
          {lan === 'EN' ? 'Termination' : 'Terminación'}
        </h3>
        <p>
          {lan === 'EN' ? 'We may suspend or terminate your access to our Services for violating these Terms, or for other reasons deemed necessary to protect our Services or users.' : 'Podemos suspender o terminar tu acceso a nuestros Servicios por violar estos Términos, o por otras razones consideradas necesarias para proteger nuestros Servicios o usuarios.'}
        </p>
        <h3 className="text-2xl font-semibold font-poppins">6. 
          {lan === 'EN' ? 'Changes to Terms' : 'Cambios a los Términos'}
        </h3>
        <p>
          {lan === 'EN' ? 'We reserve the right to update these Terms. Any changes will be effective upon posting, and it is your responsibility to review them periodically.' : 'Nos reservamos el derecho de actualizar estos Términos. Cualquier cambio será efectivo al publicarse, y es tu responsabilidad revisarlos periódicamente.'}
        </p>
    </>
  )
}

export default TermsAndConditions