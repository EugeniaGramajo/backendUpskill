const app = require("./src/server")

const PORT = 8001

app.listen(PORT, ()=>{
    console.log(`Characters service listening at ${PORT}`)
})