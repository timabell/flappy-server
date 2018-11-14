const express = require('express')
const app = express();

var returnCode = process.env.returncode || 200;

app.get('*', (req, res) => {
	  console.log(new Date(), 'called GET API', req.originalUrl);
	  setTimeout(() => {
			    console.log('replying with '+returnCode);
			    res.status(returnCode).send('hello and a '+returnCode+' from a flappy app service');
			    // console.log('replying with failure');
			    // res.status(500).send('Something broke!');
			  }, 500) // wait 0.5secs
})

var port = process.env.PORT || 1337;
app.listen(port);
console.log("Server running at http://localhost:%d", port);
