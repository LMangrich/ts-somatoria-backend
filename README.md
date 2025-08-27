# Calculadora de Somatória UFSC - Backend

Uma API REST desenvolvida em TypeScript/Node.js para calcular pontuações de questões de somatória com enfoque no vestibular da UFSC.

## 📋 Sobre o Projeto

Este projeto é o backend de uma calculadora especializada em questões de somatória do vestibular da UFSC. As questões de somatória são um tipo específico de questão onde múltiplas alternativas podem ser corretas, e cada alternativa tem um valor binário (1, 2, 4, 8, 16, 32, 64).

### Funcionalidades

- ✅ Validação de entrada com Joi
- 🔢 Decodificação de somas em números binários
- 📊 Cálculo automático de pontuação
- 🎯 Identificação de acertos, erros e questões perdidas
- 🌐 CORS configurado para frontend
- 🛡️ Tratamento de erros robusto

## 🚀 Deploy

A aplicação está hospedada no **Render** e pode ser acessada em:
```
https://[---].onrender.com
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Superset tipado do JavaScript
- **Joi** - Validação de schemas
- **CORS** - Controle de acesso entre origens

## 📁 Estrutura do Projeto

```
src/
├── controllers/
│   └── scoreController.ts    # Controlador da rota de pontuação
├── routes/
│   └── scoreRoutes.ts       # Definição das rotas
├── schema/
│   └── scoreSchema.ts       # Esquemas de validação Joi
├── services/
│   └── scoringService.ts    # Lógica de cálculo de pontuação
├── types/
│   └── scoringTypes.ts      # Definições de tipos TypeScript
├── utils/
│   └── mathUtils.ts         # Funções utilitárias matemáticas
└── app.ts                   # Configuração principal do servidor
```

## 🔧 Instalação e Uso Local

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/LMangrich/.git](https://github.com/LMangrich/ts-somatoria-backend.git
cd ts-somatoria-backend
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute em modo desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Para build de produção:
```bash
npm run build
npm start
```

## 📡 API Endpoints

### POST /score

Calcula a pontuação baseada nas respostas do usuário.

**Payload:**
```json
{
  "userTotalSum": 21,
  "correctTotalSum": 26,
  "totalQuestionItems": 6
}
```

**Resposta:**
```json
{
  "userNumbers": [1, 4, 16],
  "correctNumbers": [2, 8, 16],
  "missedCorrectNumbers": [2, 8],
  "wrongNumbers": [1, 4],
  "points": 0
}
```

**Validações:**
- `userTotalSum`: número inteiro entre 1 e 99 (obrigatório)
- `correctTotalSum`: número inteiro entre 1 e 99 (obrigatório)  
- `totalQuestionItems`: número inteiro positivo (obrigatório)

## 🧮 Como Funciona

### Sistema de Somatória UFSC

As questões de somatória da UFSC utilizam um sistema binário onde cada alternativa tem um valor:
- Alternativa A = 1
- Alternativa B = 2  
- Alternativa C = 4
- Alternativa D = 8
- Alternativa E = 16
- Alternativa F = 32
- Alternativa G = 64

### Exemplo Prático

Se as alternativas corretas são A, C e E:
- Soma correta = 1 + 4 + 16 = **21**

Se o aluno marcou A, B e E:
- Soma do aluno = 1 + 2 + 16 = **19**

**Análise:**
- ✅ Acertou: A (1), E (16)
- ❌ Errou: B (2) - marcou incorretamente
- ⚠️ Não marcou: C (4) - não marcou sendo correta

## 🌐 Frontend

Este backend funciona em conjunto com o frontend disponível em:
- **Repositório:** `https://github.com/Lmangrich/ts-somatoria-frontend`
- **Deploy:** `https://Lmangrich.github.io/ts-somatoria-frontend`
  
## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🐛 Tratamento de Erros

A API retorna erros padronizados:

- **400 Bad Request:** Dados de entrada inválidos
- **500 Internal Server Error:** Erros internos do servidor

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**[Letícia S. M. Pereira]**
- GitHub: [@Lmangrich](https://github.com/Lmangrich)
- LinkedIn: [Letícia Mangrich](www.linkedin.com/in/letícia-souza-mangrich-pereira)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
