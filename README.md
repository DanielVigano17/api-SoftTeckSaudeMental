# API SoftTeck Saúde Mental

API simples para fornecer dados de mensagens, dicas e lembretes para o sistema de saúde mental.

## Instalação Local

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
npm start
```

Para desenvolvimento com auto-reload:
```bash
npm run dev
```

## Deploy na Vercel

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça login na Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Para deploy em produção:
```bash
vercel --prod
```

## Endpoints

- `GET /api/mensagens` - Retorna lista de mensagens motivacionais
- `GET /api/dicas` - Retorna lista de dicas
- `GET /api/lembretes` - Retorna lista de lembretes
- `GET /health` - Verifica o status da API
- `GET /` - Página inicial da API

## Exemplo de uso

```bash
# Buscar mensagens
curl http://localhost:3000/api/mensagens

# Buscar dicas
curl http://localhost:3000/api/dicas

# Buscar lembretes
curl http://localhost:3000/api/lembretes
``` 