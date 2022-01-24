const eadService = require("../services/eadService")

module.exports = {
    async list(request, response){
        var {
            apiname, 
            qtdpaginas
        } = request.query
        
        var listCompleted = await eadService.buildList(apiname, qtdpaginas)    
        response.json(listCompleted)
    }
}

