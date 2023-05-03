const { MongoClient } = require('mongodb')

async function connect() {
    const MongoDBclient = new MongoClient('mongodb://127.0.0.1:27017')

    await MongoDBclient.connect()

    const db = MongoDBclient.db('HSchool');

    return {
        students: db.collection('students')
    }
}

module.exports = { connect } 