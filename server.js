const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
//app.use(cors());

app.get('/data', (req, res) => {
	fs.readFile('./data/data.json', 'utf8', (err, data) => {
		res.send(data);
	});
});

app.listen(3001, function() {
	console.log(`server is running on port ${process.env.PORT}!`);
});