const BaseService = require('./base-service')
const UserModel = require('./models/user')


class PersonService extends BaseService {
    constructor() {
        super(UserModel, `${__dirname}/../person-database.json`)

    }
}

module.exports = new UserService()