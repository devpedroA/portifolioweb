# 👨‍💻 Portfólio Pessoal para Desenvolvedor de Software

Este projeto é um portfólio online onde compartilho meus trabalhos, habilidades e experiências como desenvolvedor de software. Fiz ele para mostrar um pouco do que sei e para facilitar o contato com quem possa se interessar pelo meu trabalho. Acredito que um portfólio claro, organizado e com um toque pessoal é uma ótima maneira de me conectar com novas oportunidades. 😊

---

## 🛠️ Tecnologias Utilizadas

<img align="center" alt="HTML" src="https://img.shields.io/badge/HTML5-323330?style=for-the-badge&logo=html5&logoColor=orange" /> <img align="center" alt="CSS" src="https://img.shields.io/badge/CSS3-323330?style=for-the-badge&logo=css3&logoColor=blue" /> <img align="center" alt="JS" src="https://img.shields.io/badge/typescript-323330?style=for-the-badge&logo=typescript&logoColor=blue" /> <img align="center" alt="React" src="https://img.shields.io/badge/React-323330?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img align="center" alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-323330?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" /> <img align="center" alt="Git" src="https://img.shields.io/badge/Git-323330?style=for-the-badge&logo=git&logoColor=F05032" /> <img align="center" alt="GitHub" src="https://img.shields.io/badge/GitHub-323330?style=for-the-badge&logo=github&logoColor=white" /> <img align="center" alt="GitHub" src="https://img.shields.io/badge/next_js-323330?style=for-the-badge&logo=nextdotjs&logoColor" />

### ⏳ Tempo de Projeto

- 🗓️ **2 dias**: Tempo total dedicado ao desenvolvimento.

---

## 📌 Funcionalidades Principais

- **Página Inicial**: Breve introdução sobre mim e minhas habilidades.
- **Seção de Habilidades**: Lista de tecnologias que domino, com ícones e progresso.
- **Projetos Destacados**: Cards interativos com links para repositórios e demos.
- **Seção de Certificados**: Cards interativos com certificados.
- **Formulário de Contato**: Opção para enviar mensagens diretamente pelo portfólio.

---

## 🚀 Como Executar Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/pedroarltx/portifolioweb
2. **Acesse a pasta do projeto:**:
   ```bash
   cd portifolioweb
3. **Instale as dependências:**:
   ```bash
   npm install
4. **Inicie o servidor de desenvolvimento:**:
   ```bash
   npm run dev
4. **Acesse no navegador:**:
   ```bash
   Abra http://localhost:3000 para ver o projeto.

# 🔥 Configurando o Firebase

O projeto utiliza o **Firebase Database** para armazenar os dados de projetos e certificados. Para configurar o Firebase, siga os passos abaixo:

## 📋 Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto.
2. Adicione as seguintes variáveis de ambiente ao arquivo `.env`:

```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
```

## 🗂️ Criando as Coleções no Firebase

Após configurar o ambiente, você precisará criar duas coleções no Firebase. **Atenção:** Os nomes das coleções devem ser exatamente `certificates` e `projects`.

### 1. **Projetos**

O schema da coleção `projects` deve seguir a seguinte estrutura:
- `description`: string
- `id`: string
- `imageUrl`: string
- `link`: string
- `name`: string
- `technologies`: array

### 2. **Certificados**

- O schema da coleção `certificates` deve seguir a seguinte estrutura:
- `certificateUrl`: string
- `description`: string
- `imageUrl`: string
- `issueDate`: string
- `title`: string

## 🌐 Deployment

O projeto está hospedado em **[Vercel](https://vercel.com/)**.  
🔗 **Link do portfólio ao vivo**: https://portifolioweb-lovat.vercel.app/

## 📬 Contato

Feito por **[Pedro H](https://github.com/pedroarltx)**
✉️ **E-mail**: dev.phtech@gmail.com
💼 **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/pxdpedro-henrique)
🐱 **GitHub**: [GitHub](https://github.com/pedroarltx)
