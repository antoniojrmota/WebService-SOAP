const soap = require('soap')
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
//Utilizei pacote SOAP do Node

soap.createClient(url, (err, client) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Cliente SOAP criado com sucesso.')

        const consultaCEPArgs = {
            cep: '72135903'
        }
        client.consultaCEP(consultaCEPArgs, (err, result) => {
            if (err) {
                console.log('Erro ao consultar o CEP:', err)
            } else {
                console.log('Resposta da consulta:', result.return);
            }
        })
    }
})
