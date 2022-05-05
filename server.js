var http = require('http');
var app = require('./config/express')();
const url = "mongodb://dswa5:dswa5@cluster0-shard-00-00.vvce7.mongodb.net:27017,cluster0-shard-00-01.vvce7.mongodb.net:27017,cluster0-shard-00-02.vvce7.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-geq1me-shard-0&authSource=admin&retryWrites=true&w=majority";
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' + app.get('port'));
});