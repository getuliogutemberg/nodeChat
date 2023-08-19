const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post('/authenticate', async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put(
            `https://api.chatengine.io/users/`, 
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "83f37321-6d8a-44a5-a7b5-9c46e3dee25a" }}
        );
        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
     
    
})

app.listen(3001, () => {
    console.log('Listening on port 3001');
})