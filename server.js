const express = require('express')
const app = express();

app.get('*', (req, res) => {
	  console.log(new Date(), 'called GET API', req.originalUrl);
	  setTimeout(() => {
			    console.log('replying');
			    res.status(500).send('Something broke!');
			  }, 2000)
})

app.listen(3000);

console.log("App listening on http://localhost:3000");
