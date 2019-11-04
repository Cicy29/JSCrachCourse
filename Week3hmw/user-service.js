const BaseService = require('./base-service')
const UserModel = require('./user')


class UserService extends BaseService {
    constructor() {
        super(UserModel, `${__dirname}/../person-database.json`)

    }
}

module.exports = new UserService()