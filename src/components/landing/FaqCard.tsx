import { FAQ } from "./FrequentQuestions"

interface Props {
    item: FAQ
}

const FaqCard = ({ item }: Props) => {
  return (
    <div className="w-full bg-slate-200 dark:bg-slate-800 px-6 py-4 rounded-2xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">{item.question}</h2>
        <p>{item.answer}</p>
    </div>
  )
}

export default FaqCard