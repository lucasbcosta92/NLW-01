<h1 align="center"><img width="100%" src="ecoleta.png" alt="Ecoleta"></h1>

## "ECOLETA"
<p>Projeto desenvolvido durante a <b> Next Level Week - 01 [ NLW ]</b> oferecida pela <a href="https://rocketseat.com.br/">Rocketseat</a>.

### Descrição

<p>A aplicação é uma solução simples para conectar empresas que coletam resíduos à pessoas interessadas em fazer descarte responsável do seu lixo.</p>

### Tecnologias

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [React-Leaflet](https://github.com/PaulLeCam/react-leaflet)
- [Expo](https://github.com/expo/expo)
- [Knex](http://knexjs.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [SQLite3](https://www.sqlite.org/index.html)

## :information_source: Como utilizar a aplicação

### API 

```bash
# Entre no seguinte repositório - Go into the repository
$ cd NLW-1.0/backend

# Instale as dependências - Install dependencies
$ yarn install

# Execute as migrations - Run Migrates
$ yarn knex:migrate

# Execute os Seeds - Run Seeds
$ yarn knex:seed

# Execute o servidor - Start server
$ yarn dev

# Execução acontece na porta 3333 - running on port 3333
```

### Install Front-end

```bash
# Entre no seguinte repositório - Go into the repository
$ cd NLW-1.0/frontent

# Instale as dependências - Install dependencies
$ yarn install

# Execução - Run
$ yarn start

# Execução acontece na porta 3000 - running on port 3000
```

### Install Mobile

```bash
# Entre no seguinte repositório - Go into the repository
$ cd NLW-1.0/mobile

# Instale as dependências - Install dependencies
$ yarn install

# Execução - Run
$ yarn start

# A página do Expo será aberta e basta digitalizar o QRCODE - Expo will open, just scan the qrcode

# Se houver algum problema com as fontes, execute: - If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
