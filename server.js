const express = require('express');  
const mysql = require('mysql');      
const bodyParser = require('body-parser'); 
const cors = require('cors');        

const app = express(); 

app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// ✅ Serve static files from "public" folder
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root',       
    password: '',       
    database: 'nodejs'  
});

db.connect(err => {
    if (err) {
        console.log('Database connection failed: ', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Root route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.post('/submit', (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const query = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    
    db.query(query, [name, email, phone], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        res.json({ message: 'User data saved successfully!' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
