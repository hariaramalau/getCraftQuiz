const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = "mongodb://localhost:27017/heroes";
const Heroes = require("./heroes");


let AddNewHeroes = (obj, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        db.collection("heroeslist").insertOne(obj, (err, res) => {
            if(err){
                throw err;
            }
            callback(res.ops[0]);
            db.close();
        });

    });
}

let GetHeroesById = (id, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        let o_id = new ObjectID(id)
        db.collection("heroeslist").findOne({ _id : o_id}, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

let GetAllHeroes = (callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        db.collection("heroeslist").find({}).toArray((err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

let DeleteHeroes = (id, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        let o_id = new ObjectID(id)
        db.collection("heroeslist").deleteOne({ _id : o_id}, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

let UpdateHeroes = (id, newObj, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        let o_id = new ObjectID(id)
        db.collection("heroeslist").updateOne({ _id : o_id}, newObj, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

module.exports = {
    AddNewHeroes,
    GetHeroesById,
    GetAllHeroes, 
    DeleteHeroes,
    UpdateHeroes
}