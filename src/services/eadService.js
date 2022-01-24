require("dotenv").config()
const axios = require("axios")

module.exports = {

    async buildList(nomeApi, qtdPaginas){ 

        console.log("QTD PAGINAS: " + qtdPaginas)
        console.log("API NAME: " + nomeApi)

        let lista = []
        let url = ''
        let linhas = 0
        let limit = 1000
        let offset = 0
        let dados
    
        url = `https://cursoexcelonline.com.br/api/1/${nomeApi}?token=${process.env.eadtoken}&paginate=1&limit=1&offset=1`
        console.log(url)

        await axios.get(url).then(res => linhas = res.data)          
    
        linhas = parseInt(Number(linhas.rowsTotal)/1000)+1   


        if(qtdPaginas == 0 || qtdPaginas == undefined){
            console.log("Total de linhas: " + linhas)
            qtdPaginas = linhas
        }        
        
        for(var i = 1; i <= qtdPaginas; i++){    
            if(i>=1){
                offset = i * 1000
            }
            url = `https://cursoexcelonline.com.br/api/1/${nomeApi}?token=${process.env.eadtoken}&limit=${limit}&offset=${offset}`
            
            console.log("Linha " + i + "=> " + url)
                        
            await axios.get(url).then(res => dados = res.data)                
                      
            if(Array.isArray(dados)){          
                
                lista =  [...lista, ...dados]
            }       
    
        }
            
        return lista
    }

}


