import App from './app'

const PORT = process.env.PORT || 8000

const app = new App().express

app.listen(PORT, () => console.log(`👂Listening on Port ${PORT}👂`))