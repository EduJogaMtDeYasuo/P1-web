const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'sistema_produtos'
});

conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

module.exports = conexao;
