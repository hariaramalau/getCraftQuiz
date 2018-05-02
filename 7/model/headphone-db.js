const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = "mongodb://localhost:27017/heroes";
const Heroes = require("./heroes");


var AddNewHeroes = (obj, callback) => {
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

var GetHeroesById = (id, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        var o_id = new ObjectID(id)
        db.collection("heroeslist").findOne({ _id : o_id}, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

var GetAllHeroes = (callback) => {
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

var DeleteHeroes = (id, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        var o_id = new ObjectID(id)
        db.collection("heroeslist").deleteOne({ _id : o_id}, (err, res) => {
            if(err){
                throw err;
            }
            callback(res);
            db.close();
        });

    });
}

var UpdateHeroes = (id, newObj, callback) => {
    MongoClient.connect(url, (err, db) => {
        if(err){
            throw err;
        }

        var o_id = new ObjectID(id)
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