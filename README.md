Antes de iniciar, verifique se você tem o seguinte instalado em sua máquina:

- Node.js: [Baixar e instalar Node.js](https://nodejs.org/)
- PostgreSQL: [Baixar e instalar PostgreSQL](https://www.postgresql.org/)

## Instalação

1. Clone o repositório:

```
git clone https://github.com/LuizGuilherme13/user-crud-node-vue
```

2. Navegue até o diretório do projeto:

```
cd user-crud-node-vue
```

3. Instale as dependências do projeto:

```
npm install
```

## Uso

Com o PostgreSQL instalado, crie a seguinte table:

```
CREATE TABLE IF NOT EXISTS user_account (
	id serial PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	birthday DATE NOT NULL
)
```

1. Na raiz do projeto, renomeie o arquivo '.env.example' para '.env', e coloque as informações da sua conexão com o banco de dados.

2. Para iniciar o servidor backend, execute o seguinte comando:

```
npm run dev:back
```

Este comando iniciará o servidor backend em http://localhost:3000.

3. Para iniciar o servidor frontend, execute o seguinte comando em um novo terminal:

```
npm run dev:app
```

Este comando iniciará o servidor frontend em http://localhost:3001 e agora você pode acessa-lo em seu navegador.