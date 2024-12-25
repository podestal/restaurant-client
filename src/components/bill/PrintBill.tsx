import Button from "../ui/Button"

interface Props {
    setSuccessMsg: React.Dispatch<React.SetStateAction<string>>
    lan: string
}

const PrintBill = ({ setSuccessMsg, lan }: Props) => {

    const handlePrint = () => {
        setSuccessMsg(lan === 'EN' ? 'Printing' : 'Imprimiendo')
        setTimeout(() => {
            setSuccessMsg('')
        }, 5000)
    }

  return (
    <Button 
        label={lan === 'EN' ? 'Just Print' : 'Imprimir'}
        onClick={handlePrint}
    />  
  )
}

export default PrintBill