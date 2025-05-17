# Desafio Docker + NGINX + Node.js + MySQL

Este repositório contém a solução para o desafio Full Cycle onde colocamos em prática a utilização do **NGINX como proxy reverso** com uma aplicação **Node.js** e banco de dados **MySQL**, tudo orquestrado com **Docker Compose**.

## 💡 Objetivo

Ao acessar a aplicação pela porta `8080`, o **NGINX** redirecionará a requisição para a aplicação **Node.js**, que por sua vez irá:

1. Inserir um novo nome na tabela `people` do banco MySQL.
2. Retornar um HTML contendo:
   - A mensagem: `<h1>Full Cycle Rocks!</h1>`
   - A lista de todos os nomes cadastrados no banco.

## 🚀 Como rodar o projeto

Clone o repositório e execute o comando abaixo na raiz do projeto:

```bash
docker-compose up -d
```

A aplicação estará disponível em: [http://localhost:8080](http://localhost:8080)

## 🧱 Estrutura do Projeto

- **NGINX**: Atua como proxy reverso, encaminhando as requisições para a aplicação Node.js.
- **Node.js**: Insere nomes no banco e retorna a resposta HTML com os dados.
- **MySQL**: Armazena os nomes cadastrados.
- **Docker Compose**: Orquestra os serviços.
- **Volumes**: Habilitados na aplicação Node.js para facilitar o desenvolvimento.

## 🗃️ Tabela `people`

A estrutura da tabela utilizada é:

```sql
CREATE TABLE people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
```

## 📁 Volume de Desenvolvimento

A aplicação Node.js está configurada com volume para que alterações no código sejam refletidas automaticamente no container durante o desenvolvimento.

---

Feito com 💜 para o desafio Full Cycle!
