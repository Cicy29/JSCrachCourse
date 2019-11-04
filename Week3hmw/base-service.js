const fs = require('fs')
const Flatted = require('flatted/cjs');

module.exports = class Service {
        constructor(model, dbPath) {
            this.model = model
            this.dbPath = dbPath
        }


        async findAll() {
            return new Promise((resolve, reject) => {
                fs.readFile(this.dbPath, 'utf8', async (err, file) => {
                    if (err) {
                        if (err.code == 'ENOENT') {
                            await this.saveAll([])
                            return resolve([])
                        }

                        return reject(err)
                    }

                    const items = Flatted.parse(file).map(this.model.create)

                    resolve(items)
                })
            })
        }
