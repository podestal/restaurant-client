import axios from "axios"
import moment from "moment"
import { SimpleOrderItem } from "../services/api/orderService"

interface CorrelativeProps {
    setCorrelative:  React.Dispatch<React.SetStateAction<string>>
    documentType: 'I' | 'T'
}

export const getCorrelative = ({ setCorrelative, documentType }: CorrelativeProps) => {

    const docType = documentType === 'T' ? '03' : '01'
    const docSerie = documentType === 'T' ? 'B001' : 'F001'

    const data = {
        personaId: import.meta.env.VITE_PERSONAL_ID,
        personaToken: import.meta.env.VITE_PERSONAL_TOKEN,
        type: docType,
        serie: docSerie,
    }

    axios.post('https://back.apisunat.com/personas/lastDocument/', data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        console.log(response.data)
        setCorrelative(response.data.suggestedNumber)})
    .catch(err => console.log(err))
    
}

const numberToWords = (amount: number) => {
    const units = [
        "", "UNO", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE", "DIEZ", 
        "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE", "DIECISÉIS", "DIECISIETE", "DIECIOCHO", "DIECINUEVE"
    ]
    const tens = ["", "", "VEINTE", "TREINTA", "CUARENTA", "CINCUENTA", "SESENTA", "SETENTA", "OCHENTA", "NOVENTA"]
    const hundreds = [
        "", "CIENTO", "DOSCIENTOS", "TRESCIENTOS", "CUATROCIENTOS", "QUINIENTOS", 
        "SEISCIENTOS", "SETECIENTOS", "OCHOCIENTOS", "NOVECIENTOS"
    ]
    
    const [integerPart, decimalPart] = amount.toFixed(2).split(".")

    const convertInteger = (num: number): string => {
        if (num === 0) return "CERO"
        if (num === 100) return "CIEN"
        if (num < 20) return units[num]
        if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " Y " + units[num % 10] : "")
        if (num < 1000) {
            return hundreds[Math.floor(num / 100)] + (num % 100 !== 0 ? " " + convertInteger(num % 100) : "")
        }
        if (num < 1000000) {
            const thousands = Math.floor(num / 1000)
            const remainder = num % 1000
            return (thousands === 1 ? "MIL" : convertInteger(thousands) + " MIL") + (remainder !== 0 ? " " + convertInteger(remainder) : "")
        }

        return "CANTIDAD MUY ALTA"
    };

    const words = `${convertInteger(Number(integerPart))} CON ${decimalPart}/100 SOLES`
    return words
}

interface TicketProps {
    correlative: string
    orderItems:  SimpleOrderItem[]
}

const getItemList = (orderItems: SimpleOrderItem[]) => {
    return orderItems.map( item => (
        {
            "cbc:ID": {
                "_text": item.id
            },
            "cbc:InvoicedQuantity": {
                "_attributes": {
                    "unitCode": "NIU"
                },
                "_text": item.quantity
            },
            "cbc:LineExtensionAmount": {
                "_attributes": {
                    "currencyID": "PEN"
                },
                "_text": (item.quantity * item.cost)
            },
            "cac:PricingReference": {
                "cac:AlternativeConditionPrice": {
                    "cbc:PriceAmount": {
                        "_attributes": {
                            "currencyID": "PEN"
                        },
                        "_text": parseFloat((item.cost * 1.18).toFixed(2))
                    },
                    "cbc:PriceTypeCode": {
                        "_text": "01"
                    }
                }
            },
            "cac:TaxTotal": {
                "cbc:TaxAmount": {
                    "_attributes": {
                        "currencyID": "PEN"
                    },
                    "_text": parseFloat(((item.quantity * item.cost) * 0.18).toFixed(2))
                },
                "cac:TaxSubtotal": [
                    {
                        "cbc:TaxableAmount": {
                            "_attributes": {
                                "currencyID": "PEN"
                            },
                            "_text": (item.quantity * item.cost)
                        },
                        "cbc:TaxAmount": {
                            "_attributes": {
                                "currencyID": "PEN"
                            },
                            "_text": parseFloat(((item.quantity * item.cost) * 0.18).toFixed(2))
                        },
                        "cac:TaxCategory": {
                            "cbc:Percent": {
                                "_text": 18
                            },
                            "cbc:TaxExemptionReasonCode": {
                                "_text": "10"
                            },
                            "cac:TaxScheme": {
                                "cbc:ID": {
                                    "_text": "1000"
                                },
                                "cbc:Name": {
                                    "_text": "IGV"
                                },
                                "cbc:TaxTypeCode": {
                                    "_text": "VAT"
                                }
                            }
                        }
                    }
                ]
            },
            "cac:Item": {
                "cbc:Description": {
                    "_text": item.name
                }
            },
            "cac:Price": {
                "cbc:PriceAmount": {
                    "_attributes": {
                        "currencyID": "PEN"
                    },
                    "_text": item.cost
                }
            }
        }
    ))
}

export const generateInvoiceData = ({
    correlative,
    orderItems
}: TicketProps) => {

    const subTotal = orderItems.reduce((acc, item) => {
        return acc += parseFloat((item.cost * item.quantity).toFixed(2))
    }, 0)

    const taxes = parseFloat((subTotal*0.18).toFixed(2))
    const total = parseFloat((subTotal + taxes).toFixed(2))
    
    const itemList = getItemList(orderItems)

    const invoice = {
        personaId: import.meta.env.VITE_PERSONAL_ID,
        personaToken: import.meta.env.VITE_PERSONAL_TOKEN,
        fileName: `20482674828-01-F001-${correlative}`,
        documentBody: {
          "cbc:UBLVersionID": { _text: "2.1" },
          "cbc:CustomizationID": { _text: "2.0" },
          "cbc:ID": { _text: `F001-${correlative}` },
          "cbc:IssueDate": { _text:  moment().format("YYYY-MM-DD") },
          "cbc:IssueTime": { _text: moment().format("HH:mm:ss") },
          "cbc:InvoiceTypeCode": {
            _attributes: { listID: "0101" },
            _text: "01",
          },
          "cbc:Note": [
            {
                _text: numberToWords(total),
                _attributes: { languageLocaleID: "1000" },
            },
          ],
          "cbc:DocumentCurrencyCode": { _text: "PEN" },
          "cac:AccountingSupplierParty": {
            "cac:Party": {
              "cac:PartyIdentification": {
                "cbc:ID": {
                  _attributes: { schemeID: "6" },
                  _text: "20482674828",
                },
              },
              "cac:PartyName": { "cbc:Name": { _text: "Axios" } },
              "cac:PartyLegalEntity": {
                "cbc:RegistrationName": { _text: "Axios" },
                "cac:RegistrationAddress": {
                  "cbc:AddressTypeCode": { _text: "0000" },
                  "cac:AddressLine": { "cbc:Line": { _text: "217 primera" } },
                },
              },
            },
          },
          "cac:AccountingCustomerParty": {
            "cac:Party": {
              "cac:PartyIdentification": {
                "cbc:ID": {
                  _attributes: { schemeID: "6" },
                  _text: "20482674821",
                },
              },
              "cac:PartyLegalEntity": {
                "cbc:RegistrationName": { _text: "Factura" },
                "cac:RegistrationAddress": {
                  "cac:AddressLine": { "cbc:Line": { _text: "1020 madison av" } },
                },
              },
            },
          },
          "cac:TaxTotal": {
            "cbc:TaxAmount": {
              _attributes: { currencyID: "PEN" },
              _text: taxes,
            },
            "cac:TaxSubtotal": [
              {
                "cbc:TaxableAmount": {
                  _attributes: { currencyID: "PEN" },
                  _text: subTotal,
                },
                "cbc:TaxAmount": {
                  _attributes: { currencyID: "PEN" },
                  _text: taxes,
                },
                "cac:TaxCategory": {
                  "cac:TaxScheme": {
                    "cbc:ID": { _text: "1000" },
                    "cbc:Name": { _text: "IGV" },
                    "cbc:TaxTypeCode": { _text: "VAT" },
                  },
                },
              },
            ],
          },
          "cac:LegalMonetaryTotal": {
            "cbc:LineExtensionAmount": {
              _attributes: { currencyID: "PEN" },
              _text: subTotal,
            },
            "cbc:TaxInclusiveAmount": {
              _attributes: { currencyID: "PEN" },
              _text: total,
            },
            "cbc:PayableAmount": {
              _attributes: { currencyID: "PEN" },
              _text: total,
            },
          },
          "cac:PaymentTerms": [
            {
              "cbc:ID": { _text: "FormaPago" },
              "cbc:PaymentMeansID": { _text: "Contado" },
            },
          ],
          "cac:InvoiceLine": itemList
        },
      }

      return invoice
    
}

export const generateTicketData = ({
    correlative,
    orderItems
}: TicketProps) => {
    
    const subTotal = orderItems.reduce((acc, item) => {
        return acc += parseFloat((item.cost * item.quantity).toFixed(2))
    }, 0)

    const taxes = parseFloat((subTotal*0.18).toFixed(2))
    const total = parseFloat((subTotal + taxes).toFixed(2))

    const itemList = getItemList(orderItems)
      
    const ticket = {
        personaId: import.meta.env.VITE_PERSONAL_ID,
        personaToken: import.meta.env.VITE_PERSONAL_TOKEN,
        fileName: `20482674828-03-B001-${correlative}`,
        documentBody: {
          "cbc:UBLVersionID": { _text: "2.1" },
          "cbc:CustomizationID": { _text: "2.0" },
          "cbc:ID": { _text: `B001-${correlative}` },
          "cbc:IssueDate": { _text:  moment().format("YYYY-MM-DD") },
          "cbc:IssueTime": { _text: moment().format("HH:mm:ss") },
          "cbc:InvoiceTypeCode": {
            _attributes: { listID: "0101" },
            _text: "03",
          },
          "cbc:Note": [
            {
              _text: numberToWords(total),
              _attributes: { languageLocaleID: "1000" },
            },
          ],
          "cbc:DocumentCurrencyCode": { _text: "PEN" },
          "cac:AccountingSupplierParty": {
            "cac:Party": {
              "cac:PartyIdentification": {
                "cbc:ID": { _attributes: { schemeID: "6" }, _text: "20482674828" },
              },
              "cac:PartyName": { "cbc:Name": { _text: "Axios" } },
              "cac:PartyLegalEntity": {
                "cbc:RegistrationName": { _text: "Axios" },
                "cac:RegistrationAddress": {
                  "cbc:AddressTypeCode": { _text: "0000" },
                  "cac:AddressLine": { "cbc:Line": { _text: "217 primera" } },
                },
              },
            },
          },
          "cac:AccountingCustomerParty": {
            "cac:Party": {
              "cac:PartyIdentification": {
                "cbc:ID": { _attributes: { schemeID: "1" }, _text: "00000000" },
              },
              "cac:PartyLegalEntity": { "cbc:RegistrationName": { _text: "---" } },
            },
          },
          "cac:TaxTotal": {
            "cbc:TaxAmount": { _attributes: { currencyID: "PEN" }, _text: taxes },
            "cac:TaxSubtotal": [
              {
                "cbc:TaxableAmount": { _attributes: { currencyID: "PEN" }, _text: subTotal },
                "cbc:TaxAmount": { _attributes: { currencyID: "PEN" }, _text: taxes },
                "cac:TaxCategory": {
                  "cac:TaxScheme": {
                    "cbc:ID": { _text: "1000" },
                    "cbc:Name": { _text: "IGV" },
                    "cbc:TaxTypeCode": { _text: "VAT" },
                  },
                },
              },
            ],
          },
          "cac:LegalMonetaryTotal": {
            "cbc:LineExtensionAmount": {
              _attributes: { currencyID: "PEN" },
              _text: subTotal,
            },
            "cbc:TaxInclusiveAmount": {
              _attributes: { currencyID: "PEN" },
              _text: total,
            },
            "cbc:PayableAmount": {
              _attributes: { currencyID: "PEN" },
              _text: total,
            },
          },
          "cac:InvoiceLine": itemList
        },
      }

    return ticket
}