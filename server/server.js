import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome to my home page</h1>")
});

app.get('/about',(res, req)=>{
    res.send("<h1>My about page</h1>")
});

app.use((res, req)=>{
    res.status(400).send("Page not Found")
});

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000/");
});