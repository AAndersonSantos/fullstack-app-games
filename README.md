<h1 align="center">🎮 App Smart-Games</h1>

<h2 align="center">👁‍🗨👁‍🗨</h2>
<h3 align="center">📸Screenshot</h3>
<p>
<h1 align="center"><img src="./gif-readme/smart-games.gif"></h1>

## `Sobre`
Aplicação fullstack de um app de jogos. O frontend foi criado com Reactjs e backend com Nodejs e banco de dados MYSQL.

* `Pincipais bibliotecas utilizadas no backend`
    * [express](https://www.npmjs.com/package/express)
    * [mysql2](https://www.npmjs.com/package/mysql2)
    * [sequelize](https://sequelize.org/)

* `Pincipais bibliotecas utilizadas no frontend`
    * [Axios](https://www.npmjs.com/package/axios)
    * [sass](https://sass-lang.com/install)
    * [google-maps-react](https://www.npmjs.com/package/google-map-react)
    * [react-modal](https://www.npmjs.com/package/react-modal)
---

### `git clone`

* **Faça o clone do repositório utilizando a linha de comando abaixo:**
```
git clone https://github.com/AAndersonSantos/fullstack-app-games.git
```

### `backend`
* **Entre na pasta `backend` e utilize a linha de comando abaixo para fazer o download de todas as dependências necessarias para que o projeto funcione corretamente**
``` 
npm install
``` 

### `frontend`
* **Entre na pasta `frontend` e utilize a linha de comando abaixo para fazer o download de todas as dependências necessarias para que o projeto funcione corretamente**
``` 
npm install
``` 

### `banco de dados mysql`
* Conecte o backend ao banco de dados mysql, entre na pasta database/config/db.config.js e coloque os dados nescessarios para fazer a conexão com o seu banco de dados. Depois de criar sua base de dados no mysql, entre na pasta database/models/games descomente a linha 66 `postsdb.sync({force: true})` para criar as tabelas automaticamente. 
---

### `Executando o backend`
* Depois de realizar todas as configurações nescessarias entre na pasta backend e excecute o comando `npm start server.js` 
* O backend vai executar na porta 8081 configurado no arquivo .env ou na porta 8080.
---

### `Executando o frontend`
* Depois de realizar todas as configurações nescessarias entre na pasta frontend e excecute o comando `npm start` ou `yarn start` 

* O frontend vai executar na porta [http://localhost:3000](http://localhost:3000)

---

<h3 align="center">Criado por🤖Anderson Santos</h3>