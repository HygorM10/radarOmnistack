const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

mongoose.connect('<Aqui vai o endereco do BD>', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parâmetros:

// Query Params: request.query (Filtros, Ordenação, Paginação... )
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body:         request.body (Dados para criação ou alteração de um resgistro)

// MongoDB (Não-Relacional)

app.listen(3333);

//Desenvolvido por: Hygor Martins =?
