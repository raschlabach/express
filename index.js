const express = require('express');
const app = express();

app.use(express.json());

app.post('/generate-code', (req, res) => {
  res.json({ message: 'Code generation endpoint ready.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
