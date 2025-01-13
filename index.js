const app = require('express')();
const cors = require('cors');

app.use(cors({ origin: "*" }));

app.get("/", async(req, res) => {
    res.send('server is running 6');
});

app.listen(3001, ()=> console.log('Server is running on 3000'))
