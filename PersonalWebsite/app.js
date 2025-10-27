import express from 'express';
import fetch from 'node-fetch';

let app = express();
const PORT = 3000;

app.use(express.json());

app.get('api/token', async (req, res) => {
    const clientId = "";
    const clientSecret = "";

    const response = await fetch('https://accounts.spotify.com/api/token/', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',   
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json()
    res.json();
})

app.listen(PORT)

