const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.listen(port, () =>{
    console.log(`Musify App is running on port ${port}. Click here to open it http://localhost:3000`);
});
