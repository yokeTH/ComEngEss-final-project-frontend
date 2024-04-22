import express from 'express';

const app = express();

app.use(express.static('public'));
app.use((req, res) => {
  res.sendFile('./public/404.html', { root: '.' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend Server ready at http://localhost:${PORT}`);
});
