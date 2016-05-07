// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'e2ucyar9yhpzctcv',
    password: "z8utudz410ntv3vz",
    database: "le54gobt3hmb8msp"
});
    
// var connection = mysql.createConnection(process.env.JAWSDB_URL);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;