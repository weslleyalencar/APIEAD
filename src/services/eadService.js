require("dotenv").config()
const axios = require("axios")

module.exports = {

    async buildList(nomeApi, qtdPaginas, request){ 
       
        console.log("QTD PAGINAS: " + qtdPaginas)
        console.log("API NAME: " + nomeApi)

        let urlAPI = request.url
        console.log("URL API: " + urlAPI.split('&').slice(1).join('&'))       

        if(urlAPI == undefined){
            urlAPI = ""
        }else{
            urlAPI = "&" + urlAPI
        }

        let lista = []
        let url = ''
        let linhas = 0
        let limit = 1000
        let offset = 0
        let dados
    
        //url = `https://cursoexcelonline.com.br/api/1/${nomeApi}?token=${process.env.eadtoken}&paginate=1&limit=1&offset=1`
        url = `https://cursoexcelonline.com.br/api/1/${nomeApi}?token=${process.env.eadtoken}&paginate=1&limit=1&offset=1${urlAPI}`
        console.log("URL TOTAL: " + url)

        await axios.get(url).then(res => linhas = res.data)          
    
        linhas = parseInt(Number(linhas.rowsTotal)/1000)+1   

        console.log("Linhas " + linhas)

        if(linhas == undefined || isNaN(linhas)){
            qtdPaginas = 0
        }else{
            qtdPaginas = linhas
        }

        // if(qtdPaginas == 0 || qtdPaginas == undefined){
        //     console.log("Total de linhas: " + linhas)
        //     qtdPaginas = linhas
        // }
        
        
        console.log("Total de linhas: " + qtdPaginas)
        for(var i = 0; i <= qtdPaginas; i++){    
            if(i>=1){
                offset = i * 1000
            }
            url = `https://cursoexcelonline.com.br/api/1/${nomeApi}?token=${process.env.eadtoken}&limit=${limit}&offset=${offset}${urlAPI}`
            
            console.log("Linha " + i + "=> " + url)
                        
            await axios.get(url).then(res => dados = res.data)    
            
            //console.log(dados)
                      
            if(Array.isArray(dados)){                  
                lista =  [...lista, ...dados]
            }       
    
        }
            
        return lista
    }

}


