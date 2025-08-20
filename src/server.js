const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send('API de missões espaciais! Servidor rodando com sucesso'); 
}); 

const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}.
    Acesse: http://localhost:${PORT}/`); 
}); 