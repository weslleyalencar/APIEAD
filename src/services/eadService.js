require("dotenv").config()
const axios = require("axios")

module.exports = {

    async buildList(nomeApi, paginate, limit, offset){ 
        var lista = []
        var url = ''
        var linhas = 0
    
        url = `https://cursoexcelonline.com.br/api/1/${nomeApi}?token=${process.env.eadtoken}&paginate=${paginate}&limit=${limit}&offset=${offset}`
        console.log(url)

        await axios.get(url).then(res => linhas = res.data)  

        console.log("Total de linhas: " + linhas)
    
        linhas = parseInt(Number(linhas.rowsTotal)/1000)+1
        
        for(var i = 1; i <=1; i++){    
            if(i>=1){
                offset = i * 1000
            }
            url = `https://cursoexcelonline.com.br/api/1/${nomeApi}?token=${process.env.eadtoken}&paginate=${paginate}&limit=${limit}&offset=${offset}`
            
            console.log("Linha " + i + "=> " + url)
            
            var dados
            await axios.get(url).then(res => dados = res.data)                 
            
            if(Array.isArray(dados)){          
                lista =  [...lista, ...dados]
            }       
    
        }    
        return lista
    }

}


