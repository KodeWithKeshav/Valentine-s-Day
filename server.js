const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});
app.get('/yes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'yes.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});