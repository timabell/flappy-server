const express = require('express')
const app = express();

app.get('*', (req, res) => {
	  console.log(new Date(), 'called GET API', req.originalUrl);
	  setTimeout(() => {
			    console.log('replying with success');
			    res.status(200).send('hello from a flappy app service');
			    // console.log('replying with failure');
			    // res.status(500).send('Something broke!');
			  }, 500) // wait 0.5secs
})

app.listen(3000);

console.log("App listening on http://localhost:3000");
