module.exports=function(app){
	/*app.get('/', function (req, res) {
	  res.send('Hello world!');
	});
	app.get('/customer', function(req, res){
	  res.send('customer page');
	});
	app.get('/admin', function(req, res){
	  res.send('admin page');
	});*/
	app.get('/', function(req, res) {
	   res.sendfile('./views/index.html');
	});
	 
	app.get('/index', function(req, res) {
	   res.sendfile('./views/index.html');
	});
	 
	app.get('/test', function(req, res) {
	   res.sendfile('./views/test.html');
	});
	
}