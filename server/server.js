import express from 'express'
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Welcome to my home page</h1>")
});

app.get("/about",(req, res)=>{
    res.send("<h1>My about page</h1>")
});

app.use((req, res)=>{
    res.status(400).send("Page not Found")
});

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});