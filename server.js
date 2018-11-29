const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/portfolio2019'));

const port = 3001;


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
