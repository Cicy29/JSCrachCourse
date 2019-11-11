const BaseService = require("./base-service");
const VinylModel = require("../models/vinyl");

class VinylService extends BaseService {
    constructor() {
        super(VinylModel, `${__dirname}/../vinyl-database.json`);
    }
}
module.exports = new VinylService();