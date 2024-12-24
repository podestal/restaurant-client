import { motion } from "framer-motion"
import FaqCard from "./FaqCard"

export interface FAQ {
    id: number
    question:string
    esQuestion: string
    answer: string
    esAnswer: string
}

const questions: FAQ[] = [
    {
        id: 1,
        question: ' What is Quenteh?',
        esQuestion: '¿Qué es Quenteh?',
        answer: 'My Restaurant Manager is a product that allows restaurant owners and workers to automate their processes, making their business more efficient. It includes features like taking orders through the app, real-time updates with WebSockets, customizable menus, QR menu options for customers, sales tracking, and online payment integration with Stripe.',
        esAnswer: 'My Restaurant Manager es un producto que permite a los dueños y trabajadores de restaurantes automatizar sus procesos, haciendo su negocio más eficiente. Incluye funciones como tomar pedidos a través de la aplicación, actualizaciones en tiempo real',
    },
    {
        id: 2,
        question: 'Who can use My Restaurant Manager?',
        esQuestion: '¿Quién puede usar My Restaurant Manager?',
        answer: 'My Restaurant Manager is designed for restaurant owners, managers, waiters, and kitchen staff to streamline operations. It’s also customer-friendly, offering secure online ordering and digital invoices.',
        esAnswer: 'My Restaurant Manager está diseñado para dueños de restaurantes, gerentes, camareros y personal de cocina para agilizar las operaciones. También es amigable para el cliente, ofreciendo pedidos en línea seguros y facturas digitales.'
    },
    {
        id: 3,
        question: 'How can waiters use the app to take orders?',
        esQuestion: '¿Cómo pueden los camareros usar la aplicación para tomar pedidos?',
        answer: 'Waiters can take orders directly from the app using a tablet or smartphone. Once an order is submitted, it’s instantly sent to the kitchen using WebSockets, ensuring no delays.',
        esAnswer: 'Los camareros pueden tomar pedidos directamente desde la aplicación utilizando una tableta o un teléfono inteligente. Una vez que se envía un pedido, se envía instantáneamente a la cocina utilizando WebSockets, asegurando que no haya retrasos.'
    },
    {
        id: 4,
        question: 'Can I customize the menu?',
        esQuestion: '¿Puedo personalizar el menú?',
        answer: `Yes, you can fully customize your menu by adding or editing categories, dishes, promotions, and discounts to match your restaurant's offerings.`,
        esAnswer: 'Sí, puedes personalizar completamente tu menú agregando o editando categorías, platos, promociones y descuentos para que coincidan con las ofertas de tu restaurante.'
    },
    {
        id: 5,
        question: 'How does the sales tracking feature work?',
        esQuestion: '¿Cómo funciona la función de seguimiento de ventas?',
        answer: 'You can track your sales through interactive tables and graphs available on your dashboard. This feature provides insights into daily, weekly, or monthly sales performance.',
        esAnswer: 'Puedes realizar un seguimiento de tus ventas a través de tablas e gráficos interactivos disponibles en tu panel de control. Esta función proporciona información sobre el rendimiento de las ventas diarias, semanales o mensuales.'
    },
    {
        id: 6,
        question: 'What is the QR menu, and how does it work?',
        esQuestion: '¿Qué es el menú QR y cómo funciona?',
        answer: 'The QR menu allows customers to scan a code with their phones to view the menu digitally. They can browse dishes, promotions, and even place an order directly through the app.',
        esAnswer: 'El menú QR permite a los clientes escanear un código con sus teléfonos para ver el menú digitalmente. Pueden navegar por los platos, promociones e incluso realizar un pedido directamente a través de la aplicación.'
    },
    {
        id: 7,
        question: 'Is online payment secure?',
        esQuestion: '¿Es seguro el pago en línea?',
        answer: 'Yes, online payments are securely processed using Stripe, ensuring customer data is protected.',
        esAnswer: 'Sí, los pagos en línea se procesan de forma segura utilizando Stripe, lo que garantiza que los datos del cliente estén protegidos.'
    },
    {
        id: 8,
        question: 'What devices does My Restaurant Manager support?',
        esQuestion: '¿Qué dispositivos admite My Restaurant Manager?',
        answer: 'The app works on tablets, smartphones, and desktop computers, making it versatile for different workflows in your restaurant.',
        esAnswer: 'La aplicación funciona en tabletas, teléfonos inteligentes y computadoras de escritorio, lo que la hace versátil para diferentes flujos de trabajo en tu restaurante.'
    },
    {
        id: 9,
        question: 'Do I need an internet connection to use it?',
        esQuestion: '¿Necesito una conexión a internet para usarlo?',
        answer: 'An internet connection is required for real-time features like order updates, online payments, and generating electronic invoices. However, some offline functionality may still be available.',
        esAnswer: 'Se requiere una conexión a internet para funciones en tiempo real como actualizaciones de pedidos, pagos en línea y generación de facturas electrónicas. Sin embargo, es posible que todavía esté disponible alguna funcionalidad sin conexión.'
    },
    {
        id: 10,
        question: 'How do I set up the system for my restaurant?',
        esQuestion: '¿Cómo configuro el sistema para mi restaurante?',
        answer: 'Our team will guide you through the setup process, which includes creating an account, customizing your menu, and connecting devices like tablets or printers.',
        esAnswer: 'Nuestro equipo te guiará a través del proceso de configuración, que incluye la creación de una cuenta, la personalización de tu menú y la conexión de dispositivos como tabletas o impresoras.'
    },
    {
        id: 11,
        question: 'What happens if I need help with the system?',
        esQuestion: '¿Qué sucede si necesito ayuda con el sistema?',
        answer: 'Our support team is available to assist you via email, chat, or phone. Additionally, we provide tutorials and documentation to help you use the product effectively.',
        esAnswer: 'Nuestro equipo de soporte está disponible para ayudarte por correo electrónico, chat o teléfono. Además, proporcionamos tutoriales y documentación para ayudarte a utilizar el producto de manera efectiva.'
    }
]

const FrequentQuestions = () => {

    const variants = {
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0 }, 
      }

  return (
    <section 
        id='faqs'
        className="w-full flex flex-col justify-start items-start gap-20 my-20">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={variants}
        >
            <h2 className='text-6xl font-palanquin font-bold'>FAQ's</h2>
        </motion.div>
        <div className="w-full flex flex-col justify-start items-start gap-12">
            {questions.map( item => (
                <FaqCard 
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    </section>
  )
}

export default FrequentQuestions