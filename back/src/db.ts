import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
  user: 'root',
  password: '123456789',
  database: 'buzzer',
};

const conn = mysql.createConnection(access);

export default conn;
