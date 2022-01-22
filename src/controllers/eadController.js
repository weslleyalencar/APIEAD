const eadService = require("../services/eadService")

module.exports = {
    async list(request, response){
        var nomeApi = request.params.nomeApi
        var listCompleted = await eadService.buildList(nomeApi)    
        response.json(listCompleted)
    }
}

