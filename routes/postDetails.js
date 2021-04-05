var express = require('express');
var postRouter = express.Router();
var client = require('../database');

postRouter.post("/CreateGroup", function (req, res) {
    const { name, desc, id, gStatus } = req.body;
    console.log(name);
    console.log(desc);
    console.log(id);
    console.log(gStatus);

    client.query('SELECT * FROM "You_usergroup" where usergroup_name = $1', [name], function (err, result) {
        console.log(result.rows[0]);
        if (result.rows.length) {
            //console.log(result.rows[0]);
            console.log("Group name already exist!");
            res.send("This group name already exist!");
        }
        else {
            client.query('INSERT INTO "You_usergroup" (usergroup_name,usergroup_description,user_id,group_status) VALUES ($1,$2,$3,$4)', [name, desc, id, gStatus], function (err, result) {
                console.log("OKAY");
                if (err) throw err;
                //console.log(result);
                //res.send(result.rows[0]);
                console.log("All Good");
                res.send("Record Inserted!");
            });
        }
    });
});

module.exports = postRouter;