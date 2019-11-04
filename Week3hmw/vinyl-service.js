const BaseService = require("./base-service");
const VinylModel = require("./vinyl");

class VinylService extends BaseService {
    constructor() {
        super(VinylModel, `${__dirname}/../vinyl-database.json`);
    }
}
module.exports = new VinylService();