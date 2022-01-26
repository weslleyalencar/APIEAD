const app = require("./app")
const port = process.env.PORT || 3333
const qtdpaginas = process.env.qtdpaginas || 0

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}...`)
}).setTimeout(120000)