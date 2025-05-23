const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Função auxiliar para ler arquivos JSON
async function readJsonFile(filename) {
    const filePath = path.join(__dirname, filename);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

// Rotas
app.get('/api/mensagens', async (req, res) => {
    try {
        const data = await readJsonFile('mensagens.json');
        res.json(data.mensagens);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mensagens' });
    }
});

app.get('/api/dicas', async (req, res) => {
    try {
        const data = await readJsonFile('dicas.json');
        res.json(data.dicas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dicas' });
    }
});

app.get('/api/lembretes', async (req, res) => {
    try {
        const data = await readJsonFile('lembretes.json');
        res.json(data.lembretes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar lembretes' });
    }
});

// Rota de saúde
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Rota raiz
app.get('/', (req, res) => {
    res.json({ message: 'API SoftTeck Saúde Mental está funcionando!' });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
}); 