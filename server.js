const express = require('express');
const alunoRoutes = require('./src/routes/alunoRoutes');
const app = express();
const PORT = 8081;

app.use(express.json());
app.use('/', alunoRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor responde em: http://localhost:${PORT}`);
});