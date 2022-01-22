const env = require("dotenv").config()

module.exports = {

    async buildList(nomeApi){ 
        var lista = []
        var offset = 0
        var limit = 1000
        var url = ''
        var linhas = 0
    
        url = 'https://cursoexcelonline.com.br/api/1/'+ nomeApi +'?token=' + env.eadtoken + '&paginate=1&limit=1&offset=1'
        await axios.get(url).then(res => linhas = res.data)    
        console.log("Total de linhas: " + linhas)
    
        linhas = parseInt(Number(linhas.rowsTotal)/1000)+1
        
        for(var i = 1; i <=1; i++){    
            if(i>=1){
                offset = i * 1000
            }
            url = 'https://cursoexcelonline.com.br/api/1/'+ 
                nomeApi +'?token=' + env.eadtoken + '&limit='
                + limit +'&offset=' + offset
            
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


