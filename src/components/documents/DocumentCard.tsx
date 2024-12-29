import moment from "moment"
import { Document } from "../../services/sunat/documentService"

const docStatus: Record<string, string> = {
    'PENDIENTE': 'text-yellow-700 bg-yellow-300 border-yellow-400 shadow-yellow-700',
    'ACEPTADO': 'bg-green-300 text-green-700 border-green-400 shadow-green-700',
    'RECHAZADO': 'text-red-700 bg-red-300 border-red-400 shadow-red-700',
    'EXCEPCION': 'text-orange-700 bg-orange-300 border-orange-400 shadow-orange-700',
}

// text-green-700 bg-green-300 border-green-400 shadow-green-700

const docType: Record<string, string> = {
    '01': 'Factura',
    '03': 'Boleta',
    '07': 'Nota de Crédito',
    '08': 'Nota de Débito',
    '09': 'Guía de Remisión',
    '20': 'Comprobante de Retención',
    '40': 'Comprobante de Percepción',
    '43': 'Guía de Remisión Remitente',
    '50': 'Declaración Única de Aduanas',
    '91': 'Comprobante de No Domiciliado',
    '96': 'Otros'
}


interface Props {
    document: Document
}

const DocumentCard = ({ document }: Props) => {
    
  return (
    <div className="w-full grid grid-cols-4 gap-4 place-items-center font-montserrat hover:bg-slate-200 dark:hover:bg-slate-900 py-2 rounded-3xl">
        <p>{document.fileName}</p>
        <p>{moment.unix(document.issueTime).format('DD-MM-YYYY')}</p>
        <p 
            className={`shadow-xl text-center text-xs rounded-3xl py-2 border-2 w-[60%] max-lg:w-[50%] ${docStatus[document.status]}`}
            >{document.status}</p>
        <p>{docType[document.type]}</p>
    </div>
  )
}

export default DocumentCard
