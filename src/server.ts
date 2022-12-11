import App from 'app/Application';

const PORT = process.env.PORT || 8000;

const app = new App().express;

app.get('/', (req, res) => {
  return res.json({
    message: 'ok',
  });
});

app.listen(PORT, () => console.log(`👂Listening on Port ${PORT}👂`));
