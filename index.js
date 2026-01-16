const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello Infra")
})

app.get("/error", (req, res) => {
  throw new Error("Intentional error")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
