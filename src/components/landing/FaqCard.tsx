import { useState } from "react";
import { FAQ } from "./FrequentQuestions";
import { motion } from "framer-motion";
import { RiArrowUpDoubleFill } from "@remixicon/react";
import useLanguageStore from "../../hooks/store/useLanguageStore";

interface Props {
  item: FAQ;
}

const FaqCard = ({ item }: Props) => {

  const [show, setShow] = useState(false)
  const lan = useLanguageStore(s => s.lan)
  const toggleFAQ = () => setShow((prev) => !prev)


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="w-full bg-slate-200 dark:bg-slate-800 px-6 py-4 rounded-2xl flex flex-col gap-6"
    >
      {/* Question and Arrow */}
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-bold">{lan === 'EN' ? item.question : item.esQuestion}</h2>
        <motion.div
          className="cursor-pointer hover:text-neutral-700"
          onClick={toggleFAQ}
          animate={{ rotate: show ? 180 : 0 }} // Smooth rotation
          transition={{ duration: 0.3 }}
        >
          <RiArrowUpDoubleFill />
        </motion.div>
      </div>

      {/* Answer */}
      <motion.div
        className="overflow-hidden" // Hide content during height animation
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: show ? "auto" : 0,
          opacity: show ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="mt-2">{lan === 'EN' ? item.answer : item.esAnswer}</p>
      </motion.div>
    </motion.div>
  );
};

export default FaqCard;
