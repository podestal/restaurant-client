import axios from "axios"
import moment from "moment"

interface CorrelativeProps {
    setCorrelative:  React.Dispatch<React.SetStateAction<string>>
}

export const getCorrelative = ({ setCorrelative }: CorrelativeProps) => {
    const data = {
        personaId: import.meta.env.VITE_PERSONAL_ID,
        personaToken: import.meta.env.VITE_PERSONAL_TOKEN,
        type:'03',
        serie: 'B001'
    }

    axios.post('https://back.apisunat.com/personas/lastDocument/', data, {
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => setCorrelative(response.data.suggestedNumber))
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

// console.log(numberToWords(123456.78));
// // Output: "CIENTO VEINTITRÉS MIL CUATROCIENTOS CINCUENTA Y SEIS CON 78/100 SOLES"

// console.log(numberToWords(66.08));
// // Output: "SESENTA Y SEIS CON 08/100 SOLES"

interface TicketProps {
    amount: number
    correlative: string
}

export const generateTicketData = ({
    amount,
    correlative,
}: TicketProps) => {

    const taxes = parseFloat((amount*0.18).toFixed(2))
    const total = parseFloat((amount + taxes).toFixed(2))

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
                "cbc:TaxableAmount": { _attributes: { currencyID: "PEN" }, _text: amount },
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
              _text: amount,
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
          "cac:InvoiceLine": [
            {
              "cbc:ID": { _text: 1 },
              "cbc:InvoicedQuantity": {
                _attributes: { unitCode: "NIU" },
                _text: 1,
              },
              "cbc:LineExtensionAmount": {
                _attributes: { currencyID: "PEN" },
                _text: amount,
              },
              "cac:PricingReference": {
                "cac:AlternativeConditionPrice": {
                  "cbc:PriceAmount": {
                    _attributes: { currencyID: "PEN" },
                    _text: total,
                  },
                  "cbc:PriceTypeCode": { _text: "01" },
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
                      _text: amount,
                    },
                    "cbc:TaxAmount": {
                      _attributes: { currencyID: "PEN" },
                      _text: taxes,
                    },
                    "cac:TaxCategory": {
                      "cbc:Percent": { _text: 18 },
                      "cbc:TaxExemptionReasonCode": { _text: "10" },
                      "cac:TaxScheme": {
                        "cbc:ID": { _text: "1000" },
                        "cbc:Name": { _text: "IGV" },
                        "cbc:TaxTypeCode": { _text: "VAT" },
                      },
                    },
                  },
                ],
              },
              "cac:Item": { "cbc:Description": { _text: "From billing util" } },
              "cac:Price": {
                "cbc:PriceAmount": {
                  _attributes: { currencyID: "PEN" },
                  _text: amount,
                },
              },
            },
          ],
        },
      }

    return ticket
}