# Este é o backend do projeto de lista de tarefas (Todo List) utilizando Node.js, Express e MongoDB Atlas.

# Antes de rodar o projeto localmente, certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

Node.js (recomendado v16 ou superior)
npm (gerenciador de pacotes)
MongoDB Atlas para uma instância na nuvem.

# Clone o repositório

git clone https://github.com/seu-usuario/todo-back.git


# Instale as dependências do projeto

npm install 


# Configuração do Banco de Dados

Este projeto usa o MongoDB como banco de dados. 

utilizando o MongoDB Atlas, crie um cluster e obtenha a URL de conexão (geralmente algo como mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority).

# Tecnologias Usadas

Node.js + Express +  Mongoose (para ORM com MongoDB)

# Outras Dependências:

CORS: Middleware para permitir requisições de origens diferentes.
Nodemon: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
Swagger: Para documentação da API.
Swagger UI Express: Integração do Swagger com o Express para exibição da documentação de forma interativa.

# Como Rodar o Projeto Localmente

npm start

Isso iniciará o servidor localmente, e o projeto estará disponível em http://localhost:3000 (ou outra porta, caso tenha sido configurada).

# Rodar a documentação da API com Swagger:

npm run swagger

A documentação estará disponível em http://localhost:3000/api-docs/.

