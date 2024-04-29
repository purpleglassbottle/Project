const mysql = require('mysql');
const form_user = document.querySelector('#form');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pro_jam_db'
});

db.connect((err)=>{
    if(err)  throw err;
});

db.query('SELECT * FROM users', (err, data) => {

    if (err) throw err 
    console.log('All data:')
    console.log(data);
    window.alert('All data:')
})