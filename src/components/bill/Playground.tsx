import axios from "axios"
import Button from "../ui/Button"

const Playground = () => {

    const invoice = {
        personaId: "675c4d5b40264100151a3492",
        personaToken: "DEV_ARMXKt1dLYTkhbI6bhp1ErGVimApMLB8CayiMsvjDulEWYFK7lUpLIKN4kAdWHsX",
        fileName: "20482674828-03-B001-00000002",
        documentBody: {
          "cbc:UBLVersionID": { _text: "2.1" },
          "cbc:CustomizationID": { _text: "2.0" },
          "cbc:ID": { _text: "B001-00000002" },
          "cbc:IssueDate": { _text: "2024-12-13" },
          "cbc:IssueTime": { _text: "10:32:13" },
          "cbc:InvoiceTypeCode": {
            _attributes: { listID: "0101" },
            _text: "03",
          },
          "cbc:Note": [
            {
              _text: "SESENTA Y SEIS CON 08/100 SOLES",
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
            "cbc:TaxAmount": { _attributes: { currencyID: "PEN" }, _text: 10.08 },
            "cac:TaxSubtotal": [
              {
                "cbc:TaxableAmount": { _attributes: { currencyID: "PEN" }, _text: 56 },
                "cbc:TaxAmount": { _attributes: { currencyID: "PEN" }, _text: 10.08 },
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
              _text: 56,
            },
            "cbc:TaxInclusiveAmount": {
              _attributes: { currencyID: "PEN" },
              _text: 66.08,
            },
            "cbc:PayableAmount": {
              _attributes: { currencyID: "PEN" },
              _text: 66.08,
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
                _text: 56,
              },
              "cac:PricingReference": {
                "cac:AlternativeConditionPrice": {
                  "cbc:PriceAmount": {
                    _attributes: { currencyID: "PEN" },
                    _text: 66.08,
                  },
                  "cbc:PriceTypeCode": { _text: "01" },
                },
              },
              "cac:TaxTotal": {
                "cbc:TaxAmount": {
                  _attributes: { currencyID: "PEN" },
                  _text: 10.08,
                },
                "cac:TaxSubtotal": [
                  {
                    "cbc:TaxableAmount": {
                      _attributes: { currencyID: "PEN" },
                      _text: 56,
                    },
                    "cbc:TaxAmount": {
                      _attributes: { currencyID: "PEN" },
                      _text: 10.08,
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
              "cac:Item": { "cbc:Description": { _text: "jhkhg jhg j" } },
              "cac:Price": {
                "cbc:PriceAmount": {
                  _attributes: { currencyID: "PEN" },
                  _text: 56,
                },
              },
            },
          ],
        },
      };
      

    const handleSunat = () => {
        axios.post('https://back.apisunat.com/personas/v1/sendBill', invoice, {
            headers: {
            //   Authorization: `JWT DEV_ARMXKt1dLYTkhbI6bhp1ErGVimApMLB8CayiMsvjDulEWYFK7lUpLIKN4kAdWHsX`,
              "Content-Type": "application/json",
            },
          })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <Button 
            label="send to sunat"
            onClick={handleSunat}
        />
    </div>
  )
}

export default Playground