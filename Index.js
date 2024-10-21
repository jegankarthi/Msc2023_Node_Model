import express from 'express';


const app = express();
app.get('/', (req, res) => {
    res.send("Hello World")
})


const PORT = process.env.PORT || 2022
app.listen(2022, () => {
    console.log(`server is running in port ${PORT}`);
})
