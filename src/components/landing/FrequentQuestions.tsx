import { motion } from "framer-motion"
import FaqCard from "./FaqCard"

export interface FAQ {
    id: number
    question:string
    answer: string
}

const questions: FAQ[] = [
    {
        id: 1,
        question: ' What is My Restaurant Manager?',
        answer: 'My Restaurant Manager is a product that allows restaurant owners and workers to automate their processes, making their business more efficient. It includes features like taking orders through the app, real-time updates with WebSockets, customizable menus, QR menu options for customers, sales tracking, and online payment integration with Stripe.'
    },
    {
        id: 2,
        question: 'Who can use My Restaurant Manager?',
        answer: 'My Restaurant Manager is designed for restaurant owners, managers, waiters, and kitchen staff to streamline operations. It’s also customer-friendly, offering secure online ordering and digital invoices.'
    },
    {
        id: 3,
        question: 'How can waiters use the app to take orders?',
        answer: 'Waiters can take orders directly from the app using a tablet or smartphone. Once an order is submitted, it’s instantly sent to the kitchen using WebSockets, ensuring no delays.'
    },
    {
        id: 4,
        question: 'Can I customize the menu?',
        answer: `Yes, you can fully customize your menu by adding or editing categories, dishes, promotions, and discounts to match your restaurant's offerings.`,
    },
    {
        id: 5,
        question: 'How does the sales tracking feature work?',
        answer: 'You can track your sales through interactive tables and graphs available on your dashboard. This feature provides insights into daily, weekly, or monthly sales performance.'
    },
    {
        id: 6,
        question: 'What is the QR menu, and how does it work?',
        answer: 'The QR menu allows customers to scan a code with their phones to view the menu digitally. They can browse dishes, promotions, and even place an order directly through the app.'
    },
    {
        id: 7,
        question: 'Is online payment secure?',
        answer: 'Yes, online payments are securely processed using Stripe, ensuring customer data is protected.'
    },
    {
        id: 8,
        question: 'What devices does My Restaurant Manager support?',
        answer: 'The app works on tablets, smartphones, and desktop computers, making it versatile for different workflows in your restaurant.',
    },
    {
        id: 9,
        question: 'Do I need an internet connection to use it?',
        answer: 'An internet connection is required for real-time features like order updates, online payments, and generating electronic invoices. However, some offline functionality may still be available.'
    },
    {
        id: 10,
        question: 'How do I set up the system for my restaurant?',
        answer: 'Our team will guide you through the setup process, which includes creating an account, customizing your menu, and connecting devices like tablets or printers.'
    },
    {
        id: 11,
        question: 'What happens if I need help with the system?',
        answer: 'Our support team is available to assist you via email, chat, or phone. Additionally, we provide tutorials and documentation to help you use the product effectively.'
    }
]

const FrequentQuestions = () => {

    const variants = {
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0 }, 
      }

  return (
    <div className="w-full flex flex-col justify-start items-start gap-20 my-20">
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
    </div>
  )
}

export default FrequentQuestions