module.exports = {
    helloWorld(request, response){    
        response.json({mensagem:"Hello World 2!"})
    },

    parametro (request, response){
        var {nome, idade} = request.query

        response.json({
                    mensagem:"Hello World," + nome + 
                    " e você tem "+ 
                    idade + " anos"}
                    )
    },

    rota (request, response){
        var id = request.params.id    
        response.json({mensagem:"O produto tem o ID=" + id})
    },

    cadastrar (request, response){    
        response.send(request.body.nome)    
    },

    async star(request, response){
        var id = request.params.id
        var url = "https://swapi.dev/api/people/"+ id +"/?format=json"
        await axios.get(url).then((data)=>{        
            response.json(data.data)
        })
    },

}