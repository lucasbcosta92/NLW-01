import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// servindo arquivos estaticos (imagens) para serem exibidos no navegador, por exemplo.
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); 
// Exibição de erros relacionados a validação
app.use(errors());

app.listen(3333);
