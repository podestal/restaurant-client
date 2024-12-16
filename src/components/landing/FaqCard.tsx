import { FAQ } from "./FrequentQuestions"
import {motion} from 'framer-motion'

interface Props {
    item: FAQ
}

const FaqCard = ({ item }: Props) => {

    const variants = {
        hidden: { opacity: 0, x: 50 }, 
        visible: { opacity: 1, x: 0 }, 
      }

  return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={variants}
        className="w-full bg-slate-200 dark:bg-slate-800 px-6 py-4 rounded-2xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">{item.question}</h2>
        <p>{item.answer}</p>
    </motion.div>
  )
}

export default FaqCard