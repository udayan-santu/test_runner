const app = require('express')();
const cors = require('cors');

app.use(cors({ origin: "*" }));

app.get("/", async(req, res) => {
    res.send('server is running 5');
});

app.listen(3000, ()=> console.log('Server is running on 3000'))
