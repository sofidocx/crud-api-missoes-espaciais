const express = require('express'); 
const db = require('./database/db.js'); 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// inicializando o banco de dados 

db.serialize(() => {
    console.log('Banco de dados e tabelas prontos!'); 
}); 


app.get('/', (req, res) => {
    res.send('API de missões espaciais! Servidor rodando com sucesso'); 
}); 

const PORT = 3000; 

// servidor escutando na porta declarada 

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}.
    Acesse: http://localhost:${PORT}/`); 
}); 