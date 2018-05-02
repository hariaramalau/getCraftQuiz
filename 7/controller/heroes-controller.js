const express = require("express")
const heroesDB = require("../model/heroes-db");
const Heroes = require("../model/heroes");

const router = express.Router();


router.get("/heroes", (req, res) => {
    heroesDB.GetAllHeroes((result) => {
        res.send(result);
    });
})

router.get("/heroes/:id", (req, res) => {
    heroesDB.GetHeroesById(req.params.id, (result) => {
        res.send(result);
    });
})

router.post("/heroes", (req, res) => {

    let obj = new Heroes(
        this.name = name,
        this.gender = gender,
        this.address = address,
        this.city = city,
        this.power = power,
        this.country = country);

        heroesDB.AddNewHeroes(obj, function (result) {
        res.send(result);
    });

})

router.put("/heroes", (req, res) => {
    let newObj = new Heroes(
        this.name = name,
        this.gender = gender,
        this.address = address,
        this.city = city,
        this.power = power,
        this.country = country);

    heroesDB.UpdateHeroes(req.body._id, newObj, (result) => {
        res.send(result);
    })
})

router.delete("/heroes/:id", (req, res) => {
    heroesDB.DeleteHeroes(req.params.id, (result) => {
        res.send(result);
    })
})


module.exports = (function () {
    return router;
})();