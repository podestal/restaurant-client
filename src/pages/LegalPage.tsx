import PrivacyPolicy from "../components/landing/PrivacyPolicy"
import TermsAndConditions from "../components/landing/TermsAndConditions"
import { motion } from "framer-motion"

const LegalPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="my-20">
        <div className="flex flex-col justify-start items-start gap-6 font-montserrat pb-16">
            <TermsAndConditions />
        </div>
        <div className="w-full border-slate-50 border-b-2"/>
        <div className="flex flex-col justify-start items-start gap-6 font-montserrat mt-10">
            <PrivacyPolicy />
        </div>
    </motion.div>
  )
}

export default LegalPage