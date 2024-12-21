import PrivacyPolicy from "../components/landing/PrivacyPolicy"
import TermsAndConditions from "../components/landing/TermsAndConditions"

const LegalPage = () => {
  return (
    <div className="my-20">
        <div className="flex flex-col justify-start items-start gap-6 font-montserrat pb-16">
            <TermsAndConditions />
        </div>
        <div className="w-full border-slate-50 border-b-2"/>
        <div className="flex flex-col justify-start items-start gap-6 font-montserrat mt-10">
            <PrivacyPolicy />
        </div>
    </div>
  )
}

export default LegalPage