const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Endereços dos Clientes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  