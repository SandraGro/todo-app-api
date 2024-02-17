const express = require('express');
const cors = require('cors')
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const filePath = path.join(__dirname, 'notes.json');

app.use(cors())
app.get('/api/notes', (req, res) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      const notas = JSON.parse(data);
      res.json(notas);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at: ${PORT}`);
});
