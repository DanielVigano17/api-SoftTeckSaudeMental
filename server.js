const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dados mockados
const mensagens = [
    {
        id: 1,
        texto: "Você está indo muito bem! Tire um tempo para reconhecer suas conquistas."
    },
    {
        id: 2,
        texto: "Respire fundo. Às vezes, desacelerar é o melhor caminho para avançar."
    }
];

const dicas = [
    {
        id: 1,
        texto: "Faça uma pausa de 5 minutos a cada hora de trabalho.",
        categoria: "Bem-estar"
    },
    {
        id: 2,
        texto: "Pratique respiração profunda por 2 minutos.",
        categoria: "Mindfulness"
    }
];

const lembretes = [
    {
        id: 1,
        texto: "Já fez seu check-in emocional de hoje?"
    },
    {
        id: 2,
        texto: "Hora de se alongar!"
    }
];

// Rotas
app.get('/api/mensagens', (req, res) => {
    res.json(mensagens);
});

app.get('/api/dicas', (req, res) => {
    res.json(dicas);
});

app.get('/api/lembretes', (req, res) => {
    res.json(lembretes);
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