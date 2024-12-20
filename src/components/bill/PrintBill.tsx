import Button from "../ui/Button"

interface Props {
    setSuccessMsg: React.Dispatch<React.SetStateAction<string>>
}

const PrintBill = ({ setSuccessMsg }: Props) => {

    const handlePrint = () => {
        setSuccessMsg('Printing')
        setTimeout(() => {
            setSuccessMsg('')
        }, 5000)
    }

  return (
    <Button 
        label='Just Print'
        onClick={handlePrint}
    />  
  )
}

export default PrintBill