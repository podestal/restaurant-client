import { useEffect } from "react"
import Input from "./Input"

interface Props {
    discountType: "fixed" | "percentage"
    setDiscountType:  React.Dispatch<React.SetStateAction<"fixed" | "percentage">>
    discount: number
    setDiscount: React.Dispatch<React.SetStateAction<number>>
    error: string
    setError: React.Dispatch<React.SetStateAction<string>>
}

const DiscountSetter = ({ 
    discountType,
    setDiscountType,
    discount,
    setDiscount,
    error,
    setError,
 }: Props) => {


    useEffect(() => {
        if (isNaN(discount)) {
            setDiscount(0)
        }
    }, [discount])

  return (
    <div
      className="w-full max-w-sm p-6 mx-auto"
    >

        <p className="text-lg lg:text-xl dark:text-slate-50 text-center mb-4">Discount</p>
        <div className="flex justify-around mb-4">
            <label className="flex items-center gap-2">
            <input
                type="radio"
                value="fixed"
                checked={discountType === "fixed"}
                onChange={() => setDiscountType("fixed")}
                className="form-radio text-green-500"
            />
            <span className="text-gray-800 dark:text-gray-200">Fixed Amount</span>
            </label>
            <label className="flex items-center gap-2">
            <input
                type="radio"
                value="percentage"
                checked={discountType === "percentage"}
                onChange={() => setDiscountType("percentage")}
                className="form-radio text-green-500"
            />
            <span className="text-gray-800 dark:text-gray-200">Percentage</span>
            </label>
        </div>
        <Input
            placeholder={discountType === "fixed" ? "Enter fixed amount" : "Enter percentage %"}
            value={discount}
            onChange={e => {
                discount !== 100 && setError('')
                setDiscount(parseFloat(e.target.value))}}
            stylesContainer="mb-6"
            error={error}
        />
        </div>
  );
};

export default DiscountSetter
