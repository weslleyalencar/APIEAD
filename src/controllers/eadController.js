const eadService = require("../services/eadService")

module.exports = {
    async list(request, response){
        var {
            apiname, 
            paginate, 
            limit, 
            offset
        } = request.query
        
        var listCompleted = await eadService.buildList(apiname, paginate, limit, offset)    
        response.json(listCompleted)
    }
}

