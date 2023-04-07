const router = require('express').Router();

const fs = require('fs');

router.get("/notes", function(req,res) {

    fs.readFile("./Develop/db/db.json", "utf8", function(err,data) {

        if (err) throw err;

        res.json(JSON.parse(data));

    });

});

router.post("/notes", function(req,res) {

    fs.readFile("./Develop/db/db.json", "utf8", function(err,data) {


    if (err) throw err;

    let mor = JSON.parse(data);

    mor.push(req.body);

    fs.writeFile("./Develop/db/db.json", JSON.stringify(mor), function(err) {

        if (err) return err;

        console.log("Begin writing");

    });

});

res.end();

});

router.delete("/notes/:id", function(req,res) {

    let id = req.params.id;

    fs.readFile("./Develop/db/db.json", "utf8", function(err,data) {

        if (err) throw err;

        let mor = JSON.parse(data);

        for (let i = 0; i < mor.length;i++) {

            if ( id == mor[i].id) {

                mor.splice(i,1);

                fs.writeFile("./Develop/db/db.json", JSON.stringify(mor), function(err) {

                    if (err) throw err;

                    console.log("Note has been removed");

                });

            };

        };

    });

    res.end();

});

module.exports = router;

