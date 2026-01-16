const express = require("express")
const app = express()

const required = process.env.REQUIRED_KEY
if (!required) {
  throw new Error("Missing REQUIRED_KEY!")
}

app.use((req, res, next) => {
  console.log(`REQ ${req.method} ${req.path}`)
  next()
})

app.get("/", (req, res) => {
  res.send("Hello Infra!")
})

app.get("/error", (req, res) => {
  throw new Error("Intentional error")
})

app.get("/ping", (req, res) => {
  res.status(200).send("pong")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
