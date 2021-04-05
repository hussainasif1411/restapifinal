var express = require('express');
var putRouter = express.Router();
var client = require('../database');

putRouter.put("/UpdateGroupContact", function (req, res) {
    const { name, id, gId } = req.body;
    console.log(id);
    console.log(gId);
    console.log(name);

    client.query('UPDATE "You_usergroup" SET usergroup_name = $1 WHERE user_id = $2 AND usergroup_id = $3', [name, id, gId], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        //console.log(result);
        console.log("Hello");
        //res.send(result.rows[0]);
    });
    res.send("Record Updated!");
});

module.exports = putRouter;