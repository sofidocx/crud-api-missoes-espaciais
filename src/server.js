const express = require('express'); 
const db = require('./database/db'); 
const missionRoutes = require('./routes/missionRoutes'); 

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api', missionRoutes); 

// inicializando o banco de dados 

db.serialize(() => {
    console.log('Banco de dados e tabelas prontos!'); 
}); 
 

const PORT = 3000; 

// servidor escutando na porta declarada 

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}.
    Acesse: http://localhost:${PORT}/`); 
}); 