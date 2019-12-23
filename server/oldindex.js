const express = require('express');

const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json({extended:false}))




app.get('/', (req, res) =>{
    res.send('hej men');
});

 

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`);
});