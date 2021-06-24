const fs = require('fs');
const https = require('https');
const path = require('path');
const privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({extended: true})

app.use('*', (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	return next()
})

app.use('/static/', express.static('static'))

app.get('/page/', (req,res) => {
	res.sendFile(path.join(__dirname, 'page.html'))
})

app.post('*', urlEncodedParser);
app.post('/payload/', (req,res) => {
	if (req.body.data) {
		const parsedData = JSON.parse(req.body.data)
		console.log(parsedData)
	}
	
	res.status(204).end()
})

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8080);