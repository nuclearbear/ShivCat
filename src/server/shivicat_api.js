var http = require('http');
var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shivcat"
});

var init = function(http, databaseConnection) {
    databaseConnection.connect(function(exp) {
        if (exp) {
            throw exp;
        }
        console.log("MySQL connection is setted up."); 
    });
}

var sqlHandler = function (result, exception) {
    
}

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("Hello world");
}).listen(80);