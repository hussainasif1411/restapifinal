var express = require('express');
var deleteRouter = express.Router();
var client = require('../database');

deleteRouter.delete("/DeleteGroup", function (req, res) {
    const { id, gId } = req.body;
    console.log(id);
    console.log(gId);

    client.query('DELETE FROM "You_usergroup" WHERE user_id = $1 AND usergroup_id = $2', [id, gId], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        //console.log(result);
        console.log("All Good");
    });
    res.send("Record Deleted!");
});

module.exports = deleteRouter;